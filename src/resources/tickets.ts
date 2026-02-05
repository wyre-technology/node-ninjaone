/**
 * Tickets resource operations
 */

import type { HttpClient } from '../http.js';
import type {
  Ticket,
  TicketListParams,
  TicketListResponse,
  TicketCreateData,
  TicketUpdateData,
  TicketComment,
  TicketCommentCreateData,
  TicketAttachment,
  TicketForm,
} from '../types/tickets.js';

/**
 * Tickets resource operations
 */
export class TicketsResource {
  private readonly httpClient: HttpClient;

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  /**
   * List tickets
   */
  async list(params?: TicketListParams): Promise<TicketListResponse> {
    return this.httpClient.request<TicketListResponse>('/api/v2/ticketing/ticket', {
      params: this.buildListParams(params),
    });
  }

  /**
   * Get a single ticket by ID
   */
  async get(id: number): Promise<Ticket> {
    return this.httpClient.request<Ticket>(`/api/v2/ticketing/ticket/${id}`);
  }

  /**
   * Create a new ticket
   */
  async create(data: TicketCreateData): Promise<Ticket> {
    return this.httpClient.request<Ticket>('/api/v2/ticketing/ticket', {
      method: 'POST',
      body: data,
    });
  }

  /**
   * Update an existing ticket
   */
  async update(id: number, data: TicketUpdateData): Promise<Ticket> {
    return this.httpClient.request<Ticket>(`/api/v2/ticketing/ticket/${id}`, {
      method: 'PUT',
      body: data,
    });
  }

  /**
   * Delete a ticket
   */
  async delete(id: number): Promise<void> {
    await this.httpClient.request<void>(`/api/v2/ticketing/ticket/${id}`, {
      method: 'DELETE',
    });
  }

  /**
   * Get ticket comments
   */
  async getComments(ticketId: number): Promise<TicketComment[]> {
    return this.httpClient.request<TicketComment[]>(`/api/v2/ticketing/ticket/${ticketId}/comment`);
  }

  /**
   * Add a comment to a ticket
   */
  async addComment(ticketId: number, data: TicketCommentCreateData): Promise<TicketComment> {
    return this.httpClient.request<TicketComment>(`/api/v2/ticketing/ticket/${ticketId}/comment`, {
      method: 'POST',
      body: data,
    });
  }

  /**
   * Get ticket attachments
   */
  async getAttachments(ticketId: number): Promise<TicketAttachment[]> {
    return this.httpClient.request<TicketAttachment[]>(`/api/v2/ticketing/ticket/${ticketId}/attachment`);
  }

  /**
   * List available ticket forms
   */
  async listForms(): Promise<TicketForm[]> {
    return this.httpClient.request<TicketForm[]>('/api/v2/ticketing/ticket-form');
  }

  /**
   * Get a specific ticket form
   */
  async getForm(id: number): Promise<TicketForm> {
    return this.httpClient.request<TicketForm>(`/api/v2/ticketing/ticket-form/${id}`);
  }

  /**
   * Build query parameters from list params
   */
  private buildListParams<T extends object>(params?: T): Record<string, string | number | boolean | undefined> {
    if (!params) return {};

    const result: Record<string, string | number | boolean | undefined> = {};
    for (const [key, value] of Object.entries(params)) {
      if (value !== undefined) {
        result[key] = value as string | number | boolean;
      }
    }
    return result;
  }
}
