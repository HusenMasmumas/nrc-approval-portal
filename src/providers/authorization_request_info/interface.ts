export interface ICoordinateContext {
  isModalOpen: boolean;
  setIsModalOpen: (e: boolean) => void;
  onManageModal: (e: boolean) => void;
}
