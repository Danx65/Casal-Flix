import React, { useState, useEffect } from 'react';
import { loadAppState, saveAppState, triggerConfetti } from './lib/storage';
import { AppState, NavTab, UserProfile } from './types';
import { CHALLENGES, getRandomChallenge } from './data/challenges';
import { SidebarNav } from './components/SidebarNav';
import { BottomNav } from './components/BottomNav';
import { OnboardingModal } from './components/OnboardingModal';
import { ToastNotification } from './components/ToastNotification';

// Views
import { ViewHome } from './components/views/ViewHome';
import { ViewChallenges } from './components/views/ViewChallenges';
import { ViewQuestions } from './components/views/ViewQuestions';
import { ViewDates } from './components/views/ViewDates';
import { ViewSurprises } from './components/views/ViewSurprises';
import { ViewFlirt } from './components/views/ViewFlirt';
import { ViewPlan30Days } from './components/views/ViewPlan30Days';
import { ViewFavorites } from './components/views/ViewFavorites';
import { ViewStatsAndAchievements } from './components/views/ViewStatsAndAchievements';
import { ViewProfile } from './components/views/ViewProfile';

export default function App() {
  const [state, setState] = useState<AppState>(loadAppState());
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Save state on changes
  useEffect(() => {
    saveAppState(state);
  }, [state]);

  // Toast Helper
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Handlers
  const handleSaveProfile = (profile: UserProfile) => {
    setState((prev) => ({ ...prev, user: profile }));
    showToast('Perfil configurado com sucesso! ❤️');
  };

  const handleToggleCompleteChallenge = (id: string) => {
    setState((prev) => {
      const isDone = prev.completedChallengeIds.includes(id);
      const nextDone = isDone
        ? prev.completedChallengeIds.filter((x) => x !== id)
        : [...prev.completedChallengeIds, id];

      if (!isDone) {
        triggerConfetti();
        showToast('Desafio concluído com sucesso! 🔥');
      }

      return {
        ...prev,
        completedChallengeIds: nextDone,
      };
    });
  };

  const handleToggleFavorite = (id: string) => {
    setState((prev) => {
      const isFav = prev.favoriteIds.includes(id);
      const nextFav = isFav
        ? prev.favoriteIds.filter((x) => x !== id)
        : [...prev.favoriteIds, id];

      showToast(isFav ? 'Removido dos favoritos' : 'Adicionado aos favoritos! ❤️');

      return {
        ...prev,
        favoriteIds: nextFav,
      };
    });
  };

  const handleTogglePlanDay = (day: number) => {
    setState((prev) => {
      const isDone = prev.completedPlanDays.includes(day);
      const nextDone = isDone
        ? prev.completedPlanDays.filter((d) => d !== day)
        : [...prev.completedPlanDays, day];

      if (!isDone) {
        showToast(`Dia ${day} do Plano Concluído! ✨`);
      }

      return {
        ...prev,
        completedPlanDays: nextDone,
      };
    });
  };

  const handleToggleExecutedDate = (id: string) => {
    setState((prev) => {
      const isExec = prev.executedDateIds.includes(id);
      const nextExec = isExec
        ? prev.executedDateIds.filter((x) => x !== id)
        : [...prev.executedDateIds, id];

      if (!isExec) {
        triggerConfetti();
        showToast('Encontro realizado marcado! 🍷');
      }

      return { ...prev, executedDateIds: nextExec };
    });
  };

  const handleToggleExecutedSurprise = (id: string) => {
    setState((prev) => {
      const isExec = prev.executedSurpriseIds.includes(id);
      const nextExec = isExec
        ? prev.executedSurpriseIds.filter((x) => x !== id)
        : [...prev.executedSurpriseIds, id];

      if (!isExec) {
        triggerConfetti();
        showToast('Surpresa realizada marcada! 🎁');
      }

      return { ...prev, executedSurpriseIds: nextExec };
    });
  };

  const handleToggleAnsweredQuestion = (id: string) => {
    setState((prev) => {
      const isAns = prev.answeredQuestionIds.includes(id);
      const nextAns = isAns
        ? prev.answeredQuestionIds.filter((x) => x !== id)
        : [...prev.answeredQuestionIds, id];

      if (!isAns) {
        showToast('Pergunta marcada como conversada! 💬');
      }

      return { ...prev, answeredQuestionIds: nextAns };
    });
  };

  const handleShuffleDailyChallenge = () => {
    const randomCh = getRandomChallenge(state.completedChallengeIds);
    setState((prev) => ({ ...prev, dailyChallengeId: randomCh.id }));
    showToast('Novo desafio gerado! 🎲');
  };

  const handleResetData = () => {
    localStorage.clear();
    window.location.reload();
  };

  const showOnboarding = !state.user.onboarded || !state.user.userName;

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-gray-100 flex flex-col lg:flex-row antialiased selection:bg-red-600 selection:text-white">
      {/* Toast Overlay */}
      <ToastNotification message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Onboarding Dialog */}
      <OnboardingModal
        initialProfile={state.user}
        onSave={handleSaveProfile}
        isOpen={showOnboarding}
      />

      {/* Desktop Sidebar Navigation */}
      <SidebarNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoriteCount={state.favoriteIds.length}
      />

      {/* Main Content Viewport */}
      <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl w-full mx-auto min-h-screen">
        {activeTab === 'home' && (
          <ViewHome
            state={state}
            onSelectTab={setActiveTab}
            onToggleCompleteChallenge={handleToggleCompleteChallenge}
            onToggleFavorite={handleToggleFavorite}
            onShuffleDailyChallenge={handleShuffleDailyChallenge}
          />
        )}

        {activeTab === 'desafios' && (
          <ViewChallenges
            completedIds={state.completedChallengeIds}
            favoriteIds={state.favoriteIds}
            onToggleComplete={handleToggleCompleteChallenge}
            onToggleFavorite={handleToggleFavorite}
          />
        )}

        {activeTab === 'conversas' && (
          <ViewQuestions
            favoriteIds={state.favoriteIds}
            answeredIds={state.answeredQuestionIds}
            onToggleFavorite={handleToggleFavorite}
            onToggleAnswered={handleToggleAnsweredQuestion}
          />
        )}

        {activeTab === 'encontros' && (
          <ViewDates
            favoriteIds={state.favoriteIds}
            executedIds={state.executedDateIds}
            onToggleFavorite={handleToggleFavorite}
            onToggleExecuted={handleToggleExecutedDate}
          />
        )}

        {activeTab === 'surpresas' && (
          <ViewSurprises
            favoriteIds={state.favoriteIds}
            executedIds={state.executedSurpriseIds}
            onToggleFavorite={handleToggleFavorite}
            onToggleExecuted={handleToggleExecutedSurprise}
          />
        )}

        {activeTab === 'flerte' && (
          <ViewFlirt
            favoriteIds={state.favoriteIds}
            onToggleFavorite={handleToggleFavorite}
            onShowToast={showToast}
          />
        )}

        {activeTab === 'plano30' && (
          <ViewPlan30Days
            completedPlanDays={state.completedPlanDays}
            onTogglePlanDay={handleTogglePlanDay}
          />
        )}

        {activeTab === 'favoritos' && (
          <ViewFavorites
            favoriteIds={state.favoriteIds}
            onToggleFavorite={handleToggleFavorite}
            onShowToast={showToast}
          />
        )}

        {activeTab === 'estatisticas' && (
          <ViewStatsAndAchievements state={state} />
        )}

        {activeTab === 'perfil' && (
          <ViewProfile
            profile={state.user}
            totalCompleted={state.completedChallengeIds.length}
            onUpdateProfile={(updated) => setState((prev) => ({ ...prev, user: updated }))}
            onResetData={handleResetData}
            onShowToast={showToast}
          />
        )}
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        favoriteCount={state.favoriteIds.length}
      />
    </div>
  );
}
