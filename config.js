let wpUrl = "http://localhost/template_wp/wp-json";

// If we're running on Docker, use the WordPress container hostname instead of localhost.
// if (process.env.HOME === '/home/node') {
//   wpUrl = 'http://localhost/template_wp/wp-json';
// }
const Config = {
  apiUrl: wpUrl,
  AUTH_TOKEN: "S05iN0JzdVc4dUgwOjJaTVF1b2JzV0xjTTB2emFjZFNyeHNZMg==",
  USERNAME: "mk3digital",
};

export default Config;
