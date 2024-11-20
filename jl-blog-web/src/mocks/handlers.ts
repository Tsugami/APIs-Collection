import { http, HttpResponse } from "msw";
import { faker } from "@faker-js/faker";
import { Blog } from "../api";

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get("/blogs", () => {
    const blogs: Blog[] = Array.from({ length: 5 }, (_, index) => ({
      id: index + 1,
      title: faker.food.dish(),
      content: faker.food.description(),
      created_at: faker.date.anytime(),
      tags: Array.from({ length: 3 }, () => faker.food.ingredient()),
    }));

    blogs.sort((a, b) => b.created_at.getTime() - a.created_at.getTime());
    return HttpResponse.json(blogs);
  }),
];
