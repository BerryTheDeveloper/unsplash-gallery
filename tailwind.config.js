module.exports = {
    purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
    darkMode: false,
    theme: {
        extend: {
            backgroundImage: (theme) => ({
                image: "url('https://source.unsplash.com/random')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
