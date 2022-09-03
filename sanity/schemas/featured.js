export default {
    name: "featured",
    type: "document",
    title: "Features Menu Catégory",
    fields: [
        {
            name: 'name',
            type: 'string',
            title: 'Featured Category name',
            validation: (Rule) => Rule.required()
        },
        {
            name: 'short_description',
            type: 'string',
            title: 'Short Description',
        },
        {
            name: 'restaurants',
            type: 'array',
            title: 'Restaurants',
            of: [{ type: "reference", to: [{ type: "restaurant" }] }]
        }
    ]
}