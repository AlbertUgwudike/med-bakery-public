// find al terminals test masterCategory
export type TestCategory = { categoryTitle: string; subcategories: TestCategory[], selected: boolean }
export const testCategory: TestCategory = {
    categoryTitle: "All",
    selected: false,
    subcategories: [
        {
            categoryTitle: "Endocrinology",
            selected: false,
            subcategories: [
                {
                    categoryTitle: "Pituitary",
                    selected: false,
                    subcategories: []
                },
                {
                    categoryTitle: "Hypothalamus",
                    selected: false,
                    subcategories: []
                }
            ]
        },
        {
            categoryTitle: "Gastro",
            selected: false,
            subcategories: [
                {
                    categoryTitle: "Pituitary",
                    selected: false,
                    subcategories: [
                        {
                            categoryTitle: "Somatotrophes",
                            selected: false,
                            subcategories: []
                        }
                    ]
                }
            ]
        }
    ] 
}