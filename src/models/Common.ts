import { Rule } from "antd/es/form";
import { NamePath } from "antd/es/form/interface";
import { ReactNode } from "react";

export interface Props {
  children: ReactNode
}

export interface BreadcrumbItem {
  title: ReactNode,
  key: string
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

export interface IParams {
  branchId?: string;
  branchName?: string;
  topicId?: string;
  topicName?: string;
  titleId?: string;
  titleName?: string;
}

export type RequestMethods = "put" | "post" | "patch" | "delete" | "get";

export type CachePolicies = "network-only" | "cache-only";

export type BadgeStatus = "default" | "warning" | "processing" | "error" | "success"