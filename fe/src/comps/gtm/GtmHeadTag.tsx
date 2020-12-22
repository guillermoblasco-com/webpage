import useGtm from "./useGtm";

const scriptCode = id => "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n" +
    "        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n" +
    "        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n" +
    "        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n" +
    "    })(window,document,'script','dataLayer','" + id + "');";

export default function GtmHeadTag() {
    const {id, active} = useGtm();
    if (!active) {
        return <script />;
    }
    return (<script dangerouslySetInnerHTML={{__html: scriptCode(id)}} />);
}
