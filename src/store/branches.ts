import { BranchModel } from 'models/Branch';
import { create } from 'zustand';

interface BranchesState {
  addDialogOpen: boolean
  editDialogOpen: boolean
  deleteDialogOpen: boolean
  selectedBranch: BranchModel
  handleAddDialog: () => void
  handleEditDialog: (selectedBranch: BranchModel) => void
  handleDeleteDialog: (selectedBranch: BranchModel) => void
}

const useBranchesStore = create<BranchesState>((set) => ({
  selectedBranch: null,
  addDialogOpen: false,
  editDialogOpen: false,
  deleteDialogOpen: false,
  handleAddDialog: () => set((state) => ({ addDialogOpen: !state.addDialogOpen })),
  handleEditDialog: (selectedBranch) => set((state) => ({ editDialogOpen: !state.editDialogOpen, selectedBranch })),
  handleDeleteDialog: (selectedBranch) => set((state) => ({ deleteDialogOpen: !state.deleteDialogOpen, selectedBranch })),
}));

export default useBranchesStore