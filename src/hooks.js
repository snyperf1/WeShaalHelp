export async function handle({ event, resolve }) {
  if (
    // event.url.pathname == "/staff/dashboard" ||
    event.url.pathname == "/staff/dashboard/random"
  ) {
    return resolve(event, { ssr: false });
  }
  return resolve(event);
}
