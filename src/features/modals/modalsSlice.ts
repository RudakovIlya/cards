import { createSlice, isFulfilled, PayloadAction } from '@reduxjs/toolkit'

import { ModalDataType, ModalStateType } from 'features/modals'
import { getPack } from 'features/pack'
import { getPackList } from 'features/packs-list'

type InitialStateType = {
  modalData: ModalDataType
  modalState: ModalStateType
}

const initialState: InitialStateType = {
  modalData: {
    _id: '',
    name: '',
    answer: '',
    question: '',
    packName: '',
    deckCover: '',
    answerImg: '',
    questionImg: '',
  },
  modalState: {
    isShowDeleteModal: false,
    isShowEditModal: false,
    isShowAddedModal: false,
  },
}

const fulfilled = isFulfilled(getPack, getPackList)

const modalsSlice = createSlice({
  name: 'modals',
  initialState,
  reducers: {
    setModalData: (state, action: PayloadAction<Partial<ModalDataType>>) => {
      state.modalData = { ...state.modalData, ...action.payload }
    },
    toggleModal: (state, action: PayloadAction<Partial<ModalStateType>>) => {
      state.modalState = { ...state.modalState, ...action.payload }
    },
    resetModalData: state => {
      state.modalData = initialState.modalData
      state.modalState = initialState.modalState
    },
  },

  extraReducers: builder => {
    builder.addMatcher(fulfilled, state => {
      state.modalState = {
        isShowDeleteModal: false,
        isShowAddedModal: false,
        isShowEditModal: false,
      }
      state.modalData = initialState.modalData
    })
  },
})

export const { reducer: modalsReducer, actions: modalActions } = modalsSlice
