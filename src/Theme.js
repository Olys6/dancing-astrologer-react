export const themeOptions = {
    palette: {
        type: 'dark',
        primary: {
            main: '#080424',
        },
        secondary: {
            main: '#fff',
        },
        background: {
            default: '#202020',
            paper: '#524f66',
        },
        success: {
            main: '#080424',
        },
        text: {
            primary: 'rgba(255,255,255,0.87)',
            secondary: 'rgba(243,240,243,0.9)',
            disabled: 'rgba(220,220,220,0.61)',
            hint: 'rgba(238,115,245,0.57)',
        },
    },
    props: {
        MuiList: {
            dense: true,
        },
        MuiMenuItem: {
            dense: true,
        },
        MuiTable: {
            size: 'small',
        },
        MuiAppBar: {
            color: 'inherit',
        },
    },
    overrides: {
        MuiAppBar: {
            colorInherit: {
                backgroundColor: '#080424',
                color: '#fff',
            },
        },
    },
};