export default function TopHeader() {
    return <>
        <div
            style={{ display: "flex", position: "sticky", top: 0, left: 0, width: "100%", background: "white" }}
        >
                        
            <div className="pad-lf-sm pad-tp-sm pad-bt-sm">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000">
                    <path d="m488-96 171-456h82L912-96h-79l-41-117H608L567-96h-79ZM169-216l-50-51 192-190q-36-38-67-79t-54-89h82q18 32 36 54.5t52 60.5q38-42 70-87.5t52-98.5H48v-72h276v-96h72v96h276v72H558q-21 69-61 127.5T409-457l91 90-28 74-112-112-191 189Zm463-63h136l-66-189-70 189Z"/>
                </svg>
            </div>

            <div style={{ flexGrow: 1 }}></div>

            <div style={{ paddingTop: "4px", paddingBottom: "4px" }}
                className="pad-rh-sm"
            >
                <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000">
                    <path d="M144-264v-72h672v72H144Zm0-180v-72h672v72H144Zm0-180v-72h672v72H144Z"/>
                </svg>
            </div>
        </div>
    </>
}
