/**
 * Ticket types for NinjaOne
 */

import type { BaseListParams, TimestampFields } from './common.js';

/**
 * Ticket status
 */
export type TicketStatus = 'OPEN' | 'CLOSED' | 'IN_PROGRESS' | 'ON_HOLD' | 'RESOLVED' | 'WAITING';

/**
 * Ticket priority
 */
export type TicketPriority = 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL';

/**
 * Ticket type
 */
export type TicketType = 'ALERT' | 'PROBLEM' | 'QUESTION' | 'TASK';

/**
 * Ticket entity
 */
export interface Ticket extends TimestampFields {
  /** Ticket ID */
  id: number;
  /** Ticket number (display) */
  ticketNumber?: string;
  /** Subject */
  subject: string;
  /** Description */
  description?: string;
  /** Status */
  status: TicketStatus;
  /** Priority */
  priority: TicketPriority;
  /** Type */
  type?: TicketType;
  /** Organization ID */
  organizationId?: number;
  /** Device ID */
  deviceId?: number;
  /** Requester user ID */
  requesterUid?: string;
  /** Requester name */
  requesterName?: string;
  /** Requester email */
  requesterEmail?: string;
  /** Assignee user ID */
  assigneeUid?: string;
  /** Assignee name */
  assigneeName?: string;
  /** Ticket form ID */
  ticketFormId?: number;
  /** Due date timestamp */
  dueDate?: number;
  /** Resolution date timestamp */
  resolutionDate?: number;
  /** Closed date timestamp */
  closedDate?: number;
  /** Source */
  source?: string;
  /** Tags */
  tags?: string[];
  /** Custom attributes */
  attributes?: Record<string, unknown>;
  /** Node ID (linked device) */
  nodeId?: number;
  /** Client ID */
  clientId?: number;
  /** Location ID */
  locationId?: number;
}

/**
 * Ticket list parameters
 */
export interface TicketListParams extends BaseListParams {
  /** Filter by organization ID */
  organizationId?: number;
  /** Filter by device ID */
  deviceId?: number;
  /** Filter by status */
  status?: TicketStatus;
  /** Filter by priority */
  priority?: TicketPriority;
  /** Filter by assignee UID */
  assigneeUid?: string;
  /** Filter by requester UID */
  requesterUid?: string;
  /** Filter by ticket form ID */
  ticketFormId?: number;
  /** Created after timestamp */
  createdAfter?: number;
  /** Created before timestamp */
  createdBefore?: number;
  /** Updated after timestamp */
  updatedAfter?: number;
  /** Updated before timestamp */
  updatedBefore?: number;
}

/**
 * Ticket list response
 */
export interface TicketListResponse {
  tickets: Ticket[];
  cursor?: string;
  totalCount?: number;
}

/**
 * Ticket creation data
 */
export interface TicketCreateData {
  /** Subject (required) */
  subject: string;
  /** Description */
  description?: string;
  /** Status */
  status?: TicketStatus;
  /** Priority */
  priority?: TicketPriority;
  /** Type */
  type?: TicketType;
  /** Organization ID */
  organizationId?: number;
  /** Device ID */
  deviceId?: number;
  /** Requester email */
  requesterEmail?: string;
  /** Requester name */
  requesterName?: string;
  /** Assignee UID */
  assigneeUid?: string;
  /** Ticket form ID */
  ticketFormId?: number;
  /** Due date timestamp */
  dueDate?: number;
  /** Tags */
  tags?: string[];
  /** Custom attributes */
  attributes?: Record<string, unknown>;
  /** Node ID */
  nodeId?: number;
  /** Client ID */
  clientId?: number;
  /** Location ID */
  locationId?: number;
}

/**
 * Ticket update data
 */
export interface TicketUpdateData {
  /** Subject */
  subject?: string;
  /** Description */
  description?: string;
  /** Status */
  status?: TicketStatus;
  /** Priority */
  priority?: TicketPriority;
  /** Type */
  type?: TicketType;
  /** Assignee UID */
  assigneeUid?: string;
  /** Due date timestamp */
  dueDate?: number;
  /** Tags */
  tags?: string[];
  /** Custom attributes */
  attributes?: Record<string, unknown>;
}

/**
 * Ticket comment
 */
export interface TicketComment extends TimestampFields {
  /** Comment ID */
  id: number;
  /** Ticket ID */
  ticketId: number;
  /** Author UID */
  authorUid?: string;
  /** Author name */
  authorName?: string;
  /** Comment body */
  body: string;
  /** Is internal (not visible to requester) */
  internal?: boolean;
}

/**
 * Ticket comment creation data
 */
export interface TicketCommentCreateData {
  /** Comment body */
  body: string;
  /** Is internal */
  internal?: boolean;
}

/**
 * Ticket attachment
 */
export interface TicketAttachment {
  /** Attachment ID */
  id: number;
  /** Ticket ID */
  ticketId: number;
  /** File name */
  fileName: string;
  /** Content type */
  contentType?: string;
  /** File size in bytes */
  size?: number;
  /** Upload timestamp */
  uploadTime?: number;
}

/**
 * Ticket form definition
 */
export interface TicketForm {
  /** Form ID */
  id: number;
  /** Form name */
  name: string;
  /** Form description */
  description?: string;
  /** Is default form */
  isDefault?: boolean;
  /** Is active */
  isActive?: boolean;
  /** Field definitions */
  fields?: TicketFormField[];
}

/**
 * Ticket form field
 */
export interface TicketFormField {
  /** Field ID */
  id: number;
  /** Field name */
  name: string;
  /** Field label */
  label?: string;
  /** Field type */
  type: 'TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'DATETIME' | 'CHECKBOX' | 'SELECT' | 'MULTISELECT';
  /** Is required */
  required?: boolean;
  /** Options (for SELECT types) */
  options?: string[];
}
