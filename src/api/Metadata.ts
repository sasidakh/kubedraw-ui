export class Metadata {
	 /**
   * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#annotations
   */
  readonly annotations?: { [key: string]: string };

  /**
   * The name of the cluster which the object belongs to. This is used to distinguish resources with same name and namespace in different clusters. This field is not set anywhere right now and apiserver is going to ignore it if set in create or update request.
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#clusterName
   */
  readonly clusterName?: string;

  /**
   * CreationTimestamp is a timestamp representing the server time when this object was created. It is not guaranteed to be set in happens-before order across separate operations. Clients may not set this value. It is represented in RFC3339 form and is in UTC.

Populated by the system. Read-only. Null for lists. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#creationTimestamp
   */
  readonly creationTimestamp?: Date;

  /**
   * Number of seconds allowed for this object to gracefully terminate before it will be removed from the system. Only set when deletionTimestamp is also set. May only be shortened. Read-only.
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#deletionGracePeriodSeconds
   */
  readonly deletionGracePeriodSeconds?: number;

  /**
   * DeletionTimestamp is RFC 3339 date and time at which this resource will be deleted. This field is set by the server when a graceful deletion is requested by the user, and is not directly settable by a client. The resource is expected to be deleted (no longer visible from resource lists, and not reachable by name) after the time in this field, once the finalizers list is empty. As long as the finalizers list contains items, deletion is blocked. Once the deletionTimestamp is set, this value may not be unset or be set further into the future, although it may be shortened or the resource may be deleted prior to this time. For example, a user may request that a pod is deleted in 30 seconds. The Kubelet will react by sending a graceful termination signal to the containers in the pod. After that 30 seconds, the Kubelet will send a hard termination signal (SIGKILL) to the container and after cleanup, remove the pod from the API. In the presence of network partitions, this object may still exist after this timestamp, until an administrator or automated process can determine the resource is fully terminated. If not set, graceful deletion of the object has not been requested.

Populated by the system when a graceful deletion is requested. Read-only. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#metadata
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#deletionTimestamp
   */
  readonly deletionTimestamp?: Date;

  /**
   * Must be empty before the object is deleted from the registry. Each entry is an identifier for the responsible component that will remove the entry from the list. If the deletionTimestamp of the object is non-nil, entries in this list can only be removed.
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#finalizers
   */
  readonly finalizers?: string[];

  /**
   * GenerateName is an optional prefix, used by the server, to generate a unique name ONLY IF the Name field has not been provided. If this field is used, the name returned to the client will be different than the name passed. This value will also be combined with a unique suffix. The provided value has the same validation rules as the Name field, and may be truncated by the length of the suffix required to make the value unique on the server.

If this field is specified and the generated name exists, the server will NOT return a 409 - instead, it will either return 201 Created or 500 with Reason ServerTimeout indicating a unique name could not be found in the time allotted, and the client should retry (optionally after the time indicated in the Retry-After header).

Applied only if Name is not specified. More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#idempotency
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#generateName
   */
  readonly generateName?: string;

  /**
   * A sequence number representing a specific generation of the desired state. Populated by the system. Read-only.
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#generation
   */
  readonly generation?: number;

  /**
   * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#labels
   */
  readonly labels?: { [key: string]: string };

  /**
   * Name must be unique within a namespace. Is required when creating resources, although some resources may allow a client to request the generation of an appropriate name automatically. Name is primarily intended for creation idempotence and configuration definition. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/identifiers#names
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#name
   */
  readonly name?: string;

  /**
   * Namespace defines the space within each name must be unique. An empty namespace is equivalent to the "default" namespace, but "default" is the canonical representation. Not all objects are required to be scoped to a namespace - the value of this field for those objects will be empty.

Must be a DNS_LABEL. Cannot be updated. More info: http://kubernetes.io/docs/user-guide/namespaces
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#namespace
   */
  readonly namespace?: string;

  /**
   * An opaque value that represents the internal version of this object that can be used by clients to determine when objects have changed. May be used for optimistic concurrency, change detection, and the watch operation on a resource or set of resources. Clients must treat these values as opaque and passed unmodified back to the server. They may only be valid for a particular resource or set of resources.

Populated by the system. Read-only. Value must be treated as opaque by clients and . More info: https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#resourceVersion
   */
  readonly resourceVersion?: string;

  /**
   * SelfLink is a URL representing this object. Populated by the system. Read-only.
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#selfLink
   */
  readonly selfLink?: string;

  /**
   * UID is the unique in time and space value for this object. It is typically generated by the server on successful creation of a resource and is not allowed to change on PUT operations.

Populated by the system. Read-only. More info: http://kubernetes.io/docs/user-guide/identifiers#uids
   *
   * @schema io.k8s.apimachinery.pkg.apis.meta.v1.ObjectMeta#uid
   */
  readonly uid?: string;

}
