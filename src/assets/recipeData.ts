interface Recipe {
  id: string;
  title: string;
  description: string;
  servings: number;
  prepTime: number;
  cookTime: number;
  img: {
    large: string;
    small: string;
  };
}

const recipes: Recipe[] = [
  {
    id: "1",
    title: "Mediterranean Chickpea Salad",
    description:
      "A refreshing, protein-packed salad tossed in a lemon-olive oil dressing.",
    servings: 2,
    prepTime: 10,
    cookTime: 0,
    img: {
      large: "src/assets/images/mediterranean-chickpea-salad-large.webp",
      small: "src/assets/images/mediterranean-chickpea-salad-small.webp",
    },
  },
  {
    id: "2",
    title: "Avocado & Tomato Wholegrain Toast",
    description:
      "Creamy avocado spread over toasted wholegrain bread, topped with juicy tomatoes.",
    servings: 1,
    prepTime: 5,
    cookTime: 5,
    img: {
      large: "src/assets/images/avocado-tomato-wholegrain-toast-large.webp",
      small: "src/assets/images/avocado-tomato-wholegrain-toast-small.webp",
    },
  },
  {
    id: "3",
    title: "One-Pan Lemon Garlic Salmon with Asparagus",
    description:
      "A 15-minute weeknight dinner of flaky salmon and tender asparagus.",
    servings: 2,
    prepTime: 5,
    cookTime: 12,
    img: {
      large: "src/assets/images/salmon-asparagus-large.webp",
      small: "src/assets/images/salmon-asparagus-small.webp",
    },
  },
  {
    id: "4",
    title: "Quinoa Veggie Power Bowl",
    description:
      "A balanced bowl of fluffy quinoa, roasted veggies and healthy fats.",
    servings: 2,
    prepTime: 10,
    cookTime: 15,
    img: {
      large: "src/assets/images/quinoa-veggie-bowl-large.webp",
      small: "src/assets/images/quinoa-veggie-bowl-small.webp",
    },
  },
  {
    id: "5",
    title: "Sweet Potato Black Bean Tacos",
    description:
      "Smoky roasted sweet potatoes and black beans tucked into warm tortillas.",
    servings: 3,
    prepTime: 10,
    cookTime: 15,
    img: {
      large: "src/assets/images/sweet-potato-tacos-large.webp",
      small: "src/assets/images/sweet-potato-tacos-small.webp",
    },
  },
  {
    id: "6",
    title: "Greek Yogurt Berry Parfait",
    description:
      "Layers of creamy yogurt, fresh berries and crunchy oats for a high-protein snack.",
    servings: 1,
    prepTime: 5,
    cookTime: 0,
    img: {
      large: "src/assets/images/greek-yogurt-large.webp",
      small: "src/assets/images/greek-yogurt-small.webp",
    },
  },
  {
    id: "7",
    title: "Lentil & Spinach Soup",
    description: "A hearty 30-minute soup rich in plant protein and iron.",
    servings: 4,
    prepTime: 10,
    cookTime: 20,
    img: {
      large: "src/assets/images/lentil-soup-large.webp",
      small: "src/assets/images/lentil-soup-small.webp",
    },
  },
  {
    id: "7",
    title: "Banana Oat Pancakes",
    description: "Flour-free pancakes sweetened naturally with ripe bananas.",
    servings: 2,
    prepTime: 5,
    cookTime: 10,
    img: {
      large: "src/assets/images/banana-pancakes-large.webp",
      small: "src/assets/images/banana-pancakes-small.webp",
    },
  },
];
