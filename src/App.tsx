import { GlobalDataProvider } from "./store";
import { Generic } from "./components/base/basic/generics";
import { ErrorBoundary } from "./components/error/errorBoundary";

export const App=()=>{
    return (
        <GlobalDataProvider>
            <Generic/>
            <ErrorBoundary>
                
            </ErrorBoundary>

        </GlobalDataProvider>
    )
}