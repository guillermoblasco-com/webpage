
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
export default function useGtm() {

    return {
        id: gtmId,
        active: gtmId?.length > 0
    }
}
