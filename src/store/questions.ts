import { QuestionModel } from 'models/Question';
import { create } from 'zustand';

interface QuestionsState {
  addDialogOpen: boolean
  editDialogOpen: boolean
  deleteDialogOpen: boolean
  selectedQuestion: QuestionModel
  handleAddDialog: () => void
  handleEditDialog: (selectedQuestion: QuestionModel) => void
  handleDeleteDialog: (selectedQuestion: QuestionModel) => void
}

const useQuestionsStore = create<QuestionsState>((set) => ({
  selectedQuestion: null,
  addDialogOpen: false,
  editDialogOpen: false,
  deleteDialogOpen: false,
  handleAddDialog: () => set((state) => ({ addDialogOpen: !state.addDialogOpen })),
  handleEditDialog: (selectedQuestion) => set((state) => ({ editDialogOpen: !state.editDialogOpen, selectedQuestion })),
  handleDeleteDialog: (selectedQuestion) => set((state) => ({ deleteDialogOpen: !state.deleteDialogOpen, selectedQuestion })),
}));

export default useQuestionsStore