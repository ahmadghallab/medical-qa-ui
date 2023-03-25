import { TopicModel } from 'models/Topic';
import { create } from 'zustand';

interface TopicsState {
  addDialogOpen: boolean
  editDialogOpen: boolean
  deleteDialogOpen: boolean
  selectedTopic: TopicModel
  handleAddDialog: () => void
  handleEditDialog: (selectedTopic: TopicModel) => void
  handleDeleteDialog: (selectedTopic: TopicModel) => void
}

const useTopicsStore = create<TopicsState>((set) => ({
  selectedTopic: null,
  addDialogOpen: false,
  editDialogOpen: false,
  deleteDialogOpen: false,
  handleAddDialog: () => set((state) => ({ addDialogOpen: !state.addDialogOpen })),
  handleEditDialog: (selectedTopic) => set((state) => ({ editDialogOpen: !state.editDialogOpen, selectedTopic })),
  handleDeleteDialog: (selectedTopic) => set((state) => ({ deleteDialogOpen: !state.deleteDialogOpen, selectedTopic })),
}));

export default useTopicsStore