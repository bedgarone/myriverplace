export default {
  name: "apartment",
  title: "Apartment",
  type: "document",
  fields: [
    {
      name: "mainimg",
      title: "Main image",
      type: "image",
    },
    {
      name: "gallery",
      title: "Image gallery",
      description: "Re-include the main image if intended",
      type: "array",
      of: [
        {
          type: "image",
        },
      ],
    },
    {
      name: "id",
      title: "Apartment Number",
      type: "number",
    },
    {
      name: "description",
      title: "Apartment description",
      type: "string",
    },
    {
      name: "spaces",
      title: "Spaces",
      type: "array",
      of: [
        {
          name: "space",
          type: "object",
          fields: [
            {
              name: "name",
              title: "Name:",
              type: "string",
            },
            {
              name: "pax",
              title: "Pax:",
              description: "(optional)",
              type: "number",
            },
            {
              name: "beds",
              title: "Beds:",
              description: "(optional)",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [
        {
          name: "amenity",
          type: "string",
        },
      ],
    },
    {
      name: "airbnburl",
      title: "Airbnb URL",
      type: "url",
    },
  ],
};
