
export interface SoapEndpoint {
    services(): SoapService[];

    /**
     * Returns a textual, human readable description of the soap endpoint.
     * Note: ATM this is only used to have at least one query field in the GraphQLSchema.
     */
    description(): string;
}

export interface SoapService {
    endpoint(): SoapEndpoint;
    name(): string;
    ports(): SoapPort[];
}

export interface SoapPort {
    endpoint(): SoapEndpoint;
    service(): SoapService;
    name(): string;
    operations(): SoapOperation[];
}

export interface SoapOperation {
    endpoint(): SoapEndpoint;
    service(): SoapService;
    port(): SoapPort;
    name(): string;
    args(): SoapOperationArg[];
    output(): { type: SoapType; isList: boolean };
    resultField(): string;
}

export type SoapType = SoapObjectType | SoapPrimitiveType;

export type SoapPrimitiveType = string;

export interface SoapObjectType {
    name: string;
    base: SoapObjectType;
    fields: SoapField[];
}

export interface SoapField {
    name: string;
    type: SoapType;
    isList: boolean;
}

export type SoapOperationArg = SoapField;
