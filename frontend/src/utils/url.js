export const getBackendUrl = () => {
  let url = import.meta.env.VITE_BACKEND_URL || "";
  // Strip all trailing slashes
  url = url.replace(/\/+$/, "");
  // Ensure it starts with https:// if it looks like a domain
  if (url && !url.startsWith("http")) {
    url = `https://${url}`;
  }
  return url;
};
