import useGtm from "./useGtm";


export default function GtmBodyTag() {
    const { id, active } = useGtm();
    if (!active) {
        return null;
    }
    return (<noscript>
        <iframe src={"https://www.googletagmanager.com/ns.html?id=" + id}
                          height="0" width="0" style={{display:'none',visibility:'hidden'}} />
    </noscript>);
}
