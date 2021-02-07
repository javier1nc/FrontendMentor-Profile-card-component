module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme => ({

      ...theme('colors'),

      'primary': '#1DA1AD',

      'secondary': '#1DA1AD',

      'danger': '#e3342f',
     }),
    
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',

      '50%': '50%',

      '16': '4rem',
     },
    
    backgroundPosition: {
      bottom: 'bottom',

     'bottom-4': 'center bottom 1rem',
      center: 'center',
      left: 'left',

     'left-bottom': 'left bottom',

     'left-top': 'left top',
      right: 'right',
      'right-bottom': 'right bottom',
      'right-top': 'right top',
      top: 'top',

     'top-4': 'center top 1rem',
    },

    extend: {
      // backgroundImage: theme => ({
      //   'pattern': "url('/images/bg-pattern.svg')",
      // })
    },
  },
  variants: {
    extend: {},
  },
}
