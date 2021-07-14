module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
            serif: ['"Roboto Slab"', 'serif'],
            body: ['Roboto', 'sans-serif'],
        },
        extend: {
            backgroundImage: () => ({
                'login-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1280.jpg')",
                'landing-background':
                    "linear-gradient(rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)),  url('/src/assets/img/sunrayLake.jpg')",
                'profile-background':
                    "linear-gradient(rgba(0,0,0, 0.75), rgba(0,0,0, 0.75)), url('/src/assets/img/background-1920x1080.jpg')",
                'arches-background':
                    "linear-gradient(rgba(0,0,0, 0.55), rgba(0,0,0, 0.45)), url('/src/assets/img/delicateArch.jpg')",
                'roadTrees-background':
                    "linear-gradient(rgba(0,0,0, 0.55), rgba(0,0,0, 0.45)), url('/src/assets/img/roadTrees.jpg')",
                'forestTrees-background':
                    "linear-gradient(rgba(0,0,0, 0.55), rgba(0,0,0, 0.45)), url('/src/assets/img/forestTrees.jpg')",
            }),
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
