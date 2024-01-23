import {http, HttpResponse} from "msw";
import {IStatus} from "../models/IStatus";
import {API_ENDPOINTS, BASE_API} from "../api/constants/apiConstants";

let allPosts = [
    {
        id: 1,
        title: "Task 1",
        description: "Description 1",
        status: IStatus.DONE,
    },
    {
        id: 2,
        title: "Task 2",
        description: "Description 2",
        status: IStatus.IN_PROGRESS,
    },
    {
        id: 3,
        title: "Task 3",
        description: "Description 3",
        status: IStatus.TODO,
    },
];

export const handlers = [
    http.get(`${BASE_API}${API_ENDPOINTS.TASKS}`, () => {
        return HttpResponse.json(allPosts);
    }),
    http.delete(`${BASE_API}${API_ENDPOINTS.TASKS}/:id`, ({ params }) => {
        const { id } = params;

        allPosts = allPosts.filter((post) => post.id !== Number(id));

        return HttpResponse.json(allPosts);
    }),
    http.post(`${BASE_API}${API_ENDPOINTS.TASKS}`, async ({ request }) => {
        const newPost = {
            id: Date.now(),
            ...await request.json()
        }

        allPosts.push(newPost);

        return HttpResponse.json(allPosts);
    }),
    http.put(`${BASE_API}${API_ENDPOINTS.TASKS}/:id`, async ({ request, params }) => {
        const { id } = params;
        const newPost = await request.json();

        allPosts = allPosts.map((post) => {
            if (post.id === Number(id)) {
                return newPost;
            }
            return post;
        });

        return HttpResponse.json(allPosts);
    }),
]
