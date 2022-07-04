export default {
  name: "tour",
  title: "Tour",
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
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "duration",
      title: "Duration",
      type: "number",
      description: "Value in hours (use comma ',' for non-integer values)",
    },
    {
      name: "pickuppoint",
      title: "Pick-up point",
      type: "string",
      initialValue: "Cruise Port, Address or Intersection",
    },
    {
      name: "timeline",
      title: "Schedule timeline",
      type: "array",
      of: [
        {
          name: "point",
          type: "object",
          fields: [
            {
              name: "time",
              title: "Time",
              description: "In the format: HH:MM",
              type: "string",
            },
            {
              name: "title",
              title: "Title",
              type: "string",
            },
            {
              name: "description",
              title: "Description",
              description: "(optional)",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "transportation",
      title: "Transportation",
      type: "object",
      fields: [
        {
          name: "transp_description",
          title: "Description",
          type: "string",
          initialValue:
            "The transport will be carried out in a modern and spacious vehicle (7-seat Seat Alhambra), equipped with air conditioning and all the passive safety systems to provide you all the comfort on board.",
        },
        {
          name: "nineseat",
          title: "9-seat vehicle transportation is available upon request",
          type: "boolean",
          initialValue: true,
        },
        {
          name: "vehicle",
          title: "Vehicle transportation is available upon request",
          type: "boolean",
          initialValue: false,
        },
      ],
    },
    {
      name: "extracosts",
      title: "Extra optional costs",
      type: "array",
      of: [
        {
          name: "extras",
          title: "Extra",
          type: "object",
          fields: [
            {
              name: "extra",
              title: "Description",
              type: "string",
            },
            {
              name: "price",
              title: "Cost",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "localsurl",
      title: "Tours by Locals URL",
      type: "url",
    },
  ],
};
