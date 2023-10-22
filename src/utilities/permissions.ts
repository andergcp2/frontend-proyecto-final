import { mainRoutes } from "@/models";

const languagePrefixRegex = /^\/[a-z]{2}\//;

export const permissions: { [key: string]: string[] } = {
  [mainRoutes.auth.root]: ["all"],
  [mainRoutes.auth.login]: ["all"],
  [mainRoutes.auth.companyRegister]: ["all"],

  [mainRoutes.dashboard]: ["all"],
  [mainRoutes.home]: ["all"],
};

export const validatePermissions = (
  pathname: string,
  userPermissions: string[]
): boolean => {
  let valid = false;
  // *Warning: This just work if ids are still numbers
  const pathWithoutLanguage = pathname.replace(languagePrefixRegex, "/");
  const paths = pathWithoutLanguage.split("/");

  if (Number(paths.at(-1))) {
    paths.pop();
    paths.push("{id}");
  }
  const dynamicPathname = paths.join("/");

  const routePermissions = permissions[dynamicPathname];

  routePermissions.forEach((routePermission) => {
    if (routePermission === "all") return (valid = true);

    if (userPermissions.includes(routePermission)) {
      return (valid = true);
    }
  });

  return valid;
};
