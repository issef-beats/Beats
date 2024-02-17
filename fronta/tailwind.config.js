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
        "aloui":'url("https://scontent.ftun9-1.fna.fbcdn.net/v/t1.15752-9/418669327_1436118517321454_1882117722593549580_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=Xsh0mbjE55oAX8cmUx3&_nc_ht=scontent.ftun9-1.fna&oh=03_AdRUlVajbFPNXjXblvC5TdqjHdlfeZM-0awD9f3IJnlUZA&oe=65F8521E")'
    },
  },
  plugins: [],
}