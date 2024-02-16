/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {
    extend: {},
    backgroundImage: {
      'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        "malek":'url("https://th.bing.com/th/id/R.1c1363a4d6164590153fa500f902280f?rik=ish0dKIZfOXBIQ&riu=http%3a%2f%2f29.media.tumblr.com%2ftumblr_ldc905Cw311qb7iw5o1_500.gif&ehk=xU0QRrupQZCepACJO0Pp3m4FBfLkWtR37WYWWTeHqLE%3d&risl=&pid=ImgRaw&r=0")',
        "aloui":'url("https://scontent.ftun10-2.fna.fbcdn.net/v/t1.15752-9/418595269_237198476096033_8534854468575086641_n.png?stp=dst-png_s2048x2048&_nc_cat=108&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=0MRq6DqQd4kAX8GmYO8&_nc_ht=scontent.ftun10-2.fna&oh=03_AdSU-b1TfkRPQB47RbZPW3YpzuoPOSQDzMnmof5v-Vux3A&oe=65DA27E3")'
    },
  },
  plugins: [],
}