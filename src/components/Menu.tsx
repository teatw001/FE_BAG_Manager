import React from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";

export function SidebarWithCta() {
  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);

  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5"
      placeholder={"..."}
    >
      <div className="mb-2 p-4">
        <Typography variant="h5" color="blue-gray" placeholder={"..."}>
          Sidebar
        </Typography>
      </div>
      <List placeholder={"..."}>
        <Accordion
          placeholder={"..."}
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1} placeholder={"..."}>
            <AccordionHeader
              placeholder={"..."}
              onClick={() => handleOpen(1)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix placeholder={"..."}>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                placeholder={"..."}
                color="blue-gray"
                className="mr-auto font-normal"
              >
                Dashboard
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List placeholder={"..."} className="p-0">
              <ListItem placeholder={"..."}>
                <ListItemPrefix placeholder={"..."}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Analytics
              </ListItem>
              <ListItem placeholder={"..."}>
                <ListItemPrefix placeholder={"..."}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Reporting
              </ListItem>
              <ListItem placeholder={"..."}>
                <ListItemPrefix placeholder={"..."}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Projects
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          placeholder={"..."}
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem placeholder={"..."} className="p-0" selected={open === 2}>
            <AccordionHeader
              placeholder={"..."}
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix placeholder={"..."}>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography
                placeholder={"..."}
                color="blue-gray"
                className="mr-auto font-normal"
              >
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List placeholder={"..."} className="p-0">
              <ListItem placeholder={"..."}>
                <ListItemPrefix placeholder={"..."}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem placeholder={"..."}>
                <ListItemPrefix placeholder={"..."}>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />
        <ListItem placeholder={"..."}>
          <ListItemPrefix placeholder={"..."}>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Inbox
          <ListItemSuffix placeholder={"..."}>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem placeholder={"..."}>
          <ListItemPrefix placeholder={"..."}>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem placeholder={"..."}>
          <ListItemPrefix placeholder={"..."}>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem placeholder={"..."}>
          <ListItemPrefix placeholder={"..."}>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
      <Alert
        open={openAlert}
        className="mt-auto"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12" />
        <Typography placeholder={"..."} variant="h6" className="mb-1">
          Upgrade to PRO
        </Typography>
        <Typography
          placeholder={"..."}
          variant="small"
          className="font-normal opacity-80"
        >
          Upgrade to Material Tailwind PRO and get even more components,
          plugins, advanced features and premium.
        </Typography>
        <div className="mt-4 flex gap-3">
          <Typography
            placeholder={"..."}
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Dismiss
          </Typography>
          <Typography
            placeholder={"..."}
            as="a"
            href="#"
            variant="small"
            className="font-medium"
          >
            Upgrade Now
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}
