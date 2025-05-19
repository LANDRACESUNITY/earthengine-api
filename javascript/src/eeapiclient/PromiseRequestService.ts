import { MakeRequestParams } from './request_params';


export abstract class PromiseRequestService {
  /**
   * Sends a request with the specified parameters and returns a deserialized response.
   *
   * @typeParam T - The type of the response object, which must extend `Serializable`.
   * @param params - An object containing the request parameters and an optional constructor for deserializing the response.
   * @param params.params - The parameters to be sent with the request.
   * @param params.responseCtor - (Optional) The constructor used to deserialize the response into an instance of type `T`.
   * @returns A promise that resolves to an instance of type `T`, either deserialized using the provided constructor or as the raw response.
   */
  abstract makeRequest(params: MakeRequestParams): Promise<unknown>;
}
