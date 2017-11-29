const INITITAL_STATE = { summary: { credit: 0, debit: 0 } }

export default function (state = INITITAL_STATE, action) {
    switch (action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}