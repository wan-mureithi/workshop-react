import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import { ComponentContextProvider } from "@dalbergdatainsights/react-components"

import ComponentExampleDeleteThis from "@components/ComponentExampleDeleteThis"

import { muiTheme } from "@config/muiTheme"
import reactTheme from "@config/componenetsTheme"

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  })

  return (
    <>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <ComponentContextProvider config={reactTheme}>
          <QueryClientProvider client={queryClient}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<ComponentExampleDeleteThis />}>
                  <Route index element={<ComponentExampleDeleteThis />} />
                  <Route
                    path="/topic/:topicName"
                    element={<ComponentExampleDeleteThis />}
                  />
                </Route>
              </Routes>
            </BrowserRouter>
          </QueryClientProvider>
        </ComponentContextProvider>
      </ThemeProvider>
    </>
  )
}

export default App
