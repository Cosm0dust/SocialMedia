import { useCallback } from 'react';
import { FetchBaseQueryError} from '@reduxjs/toolkit/query';
import {SerializedError} from "@reduxjs/toolkit";

const useErrorMessage = (): ((error: FetchBaseQueryError | SerializedError) => string) => {
    const errorMessage = useCallback(
        (error: FetchBaseQueryError | SerializedError): string => {
            if ('status' in error && 'data' in error) {
                return `Error: ${error.status} - ${JSON.stringify(error.data)}`;
            } else if ('message' in error) {
                return `Error: ${error.message}`;
            } else {
                return 'An unknown error occurred.';
            }
        },
        []
    );

    return errorMessage;
};

export default useErrorMessage;