Steps:  

1. created a single `repo` for both folders of client & server with a `README.md` & `steps.md`. 

2. connected the parent folder with the repo.  

3. opened `parent folder > steps.md` in a vs code window using `cmd` > `code .` 

4. went to  https://reactrouter.com/en/main/start/tutorial for setting client side 

5. copied `npm create vite@latest name-of-your-project -- --template react` to create the `client-side` on terminal (via cmd) 

6. run `cd bistro-boss-client-phm-final-project` on the terminal (important) 

7. copied `npm install react-router-dom localforage match-sorter sort-by` & pasted in the terminal again 

8. [repeat] from step-5 (after deleting things) if errors happen (important) 

9. went to https://tailwindcss.com/docs/guides/vite 

10. copied & runned `npm install -D tailwindcss postcss autoprefixer` first, then `npx tailwindcss init -p` 

11. opened the project using `code .` 

12. go to `tailwind.config.js` file to paste/replace `content: [],` with the following 
    ```
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
      ],
    ```

13. went to `./src/index.css` file to replace everything with the following: 
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

14. deleted everything in `./src/App.css` 

15. went to `https://daisyui.com/docs/install/` to install daisyUI 

16. runned `npm i -D daisyui@latest` to install daisyUI 

17. added daisyUI to `tailwind.config.js` replacing `plugins: [],` with the following:
    ```
      plugins: [
        require('daisyui'),
      ],
    ```

18. went to `.eslintrc.cjs` to replace `env: { browser: true, es2020: true },` with `env: { browser: true, es2020: true, node: true },` so that require-daisy does not show warning in tailwindcss-config 

19. runned `npm run dev -- --host` 

20. went to `main.jsx` to paste the following below line-4: 
```
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
```

21. replaced `<App />` with `<RouterProvider router={router} />`

22. created `Routes/Routes.jsx` under `/src` & pasted the following codes into the file: 
```
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
]);
```

23. added `export` before `const router = createBrowserRouter([` 

24. added `import { router } from './Routes/Routes';` in `main.jsx` 

25. For nested routes, created `Layout/Main.jsx` under `/src` [*capitalization important*] & added/imported `<Outlet>` from react-router-dom. 

26. created `Pages/Home.jsx` under `./src` & used `rsc` emmit. 

27. went to `Routes.jsx`, added the `<Home>` to the routes (see code below), and imported `Home` & `Main`. 
```
import {
    createBrowserRouter,
    // RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
  ]);
```

28. created `Shared/Footer.jsx` under `/src` & used `rsc` emmit. 

29. added `<Footer>` under `<Outlet>` on `Layout/Main.jsx`. 

30. copied a daisyUI footer component & modified. 

31. on `src/main.jsx` (*capitalization important*), replaced `<RouterProvider router={router} />` with: 
```
<div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router} />
    </div>
```

32. 

