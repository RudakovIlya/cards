import { RootState } from 'app/store'

const appError = (state: RootState) => state.app.error
const appStatus = (state: RootState) => state.app.status
const isInitialize = (state: RootState) => state.app.isInit
const appInfoMessage = (state: RootState) => state.app.infoMessage

export { appError, appStatus, isInitialize, appInfoMessage }
