import CategoryCard from "./CategoryCard";

const categories = [
    {
        name: "chocolate",
        imagePath: "./category-chocolate.jpg",
        toolTip: "category-chocolate.jpg"
    }, {
        name: "milk",
        imagePath: "category-milk.jpg",
        toolTip: "category-milk.jpg"
    }, {
        name: "sweets",
        imagePath: "category-sweet.jpg",
        toolTip: "category-sweet.jpg"
    }
];

export default function CategoryCardList() {
    return (
        <div className="mar-sm"
            style={{ display: "flex", gap: "8px", minHeight: "104px", maxHeight: "208px" }}
        >
            {
                categories.map(({name, imagePath, toolTip}) => {
                    return (
                        <div style={{ flex: 1 }}>
                            <CategoryCard name={name} 
                                imagePath={imagePath}
                                toolTip={toolTip}
                            />
                        </div>
                    );
                })
            }
        </div>
    )
}