export type OpenPopupOptions = Pick<PopupType, 'popupData'|'popupName'>;

export interface PopupType<T = any> {
    popupName ?: string,
    popupData ?: T
    openPopup : (options : OpenPopupOptions) => void
    closingPopup ?: boolean
    closeAllPopup : () => void
}