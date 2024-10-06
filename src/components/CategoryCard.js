export default function CategoryCard({name, imagePath, toolTip}) {
    return (
        <div
            style={{ height: "100%", width: "100%" }}
        >
            <img src={imagePath}
                alt={toolTip}
                height="100%"
                width="100%"
                className="rounded-sm"
                style={{ aspectRatio: "1/1" }}
            />
        </div>
    )
}