import { TitleModel } from 'models/Title';
import { create } from 'zustand';

interface TitlesState {
  addDialogOpen: boolean
  editDialogOpen: boolean
  deleteDialogOpen: boolean
  selectedTitle: TitleModel
  handleAddDialog: () => void
  handleEditDialog: (selectedTitle: TitleModel) => void
  handleDeleteDialog: (selectedTitle: TitleModel) => void
}

const useTitlesStore = create<TitlesState>((set) => ({
  selectedTitle: null,
  addDialogOpen: false,
  editDialogOpen: false,
  deleteDialogOpen: false,
  handleAddDialog: () => set((state) => ({ addDialogOpen: !state.addDialogOpen })),
  handleEditDialog: (selectedTitle) => set((state) => ({ editDialogOpen: !state.editDialogOpen, selectedTitle })),
  handleDeleteDialog: (selectedTitle) => set((state) => ({ deleteDialogOpen: !state.deleteDialogOpen, selectedTitle })),
}));

export default useTitlesStore