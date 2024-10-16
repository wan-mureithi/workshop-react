export default {
  colors: {},
  fonts: {},
  container: {
    style: {},
  },
  // FIXME Example! Delete this
  Dropdown: {
    enableSearch: true,
    props: {
      container: { style: { margin: "auto 0px" } },
      dropdown: {
        style: {
          borderRadius: "0.5rem",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          backgroundColor: "#FFFFFF",
        },
      },
      button: {
        style: {
          backgroundColor: "#FFFFFF",
          borderRadius: "0.5rem",
        },
      },
      search: { style: { backgroundColor: "#FFFFFF" } },
      menu: {
        style: {
          maxHeight: "150px",
          overflow: "auto",
          borderRadius: "0.5rem",
          fontWeight: 400,
        },
      },
      label: {
        style: { fontWeight: 400 },
      },
      option: {
        className: "dropdown-options",
        style: { borderRadius: 0, fontWeight: 400 },
      },
      icon: { style: { color: "#808082" } },
      point: {
        style: {
          backgroundColor: "#FAFAFC",
        },
      },
    },
  },
}
