import { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode
}

export interface BreadcrumbItem {
  label: string,
  path?: string
}

export interface CacheKey {
  url: string
  rand?: number
}

export interface ImageModel {
  id: string,
  fileName: string,
  url: string
}

export interface FormItemProps {
  label: string
  name: NamePath
  rules?: Rule[]
} 

export interface IOptions {
  label: string,
  value: string
}

export interface IStatusDisplay {
  color: string;
  label: string;
  icon: ReactNode;
}

export type RequestMethods = "put" | "post" | "patch" | "delete" | "get";

export type CachePolicies = "network-only" | "cache-only";

export type BadgeStatus = "default" | "warning" | "processing" | "error" | "success"