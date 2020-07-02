import { DeploymentConfig } from "./DeploymentConfig";
import { GraphQLClient } from "graphql-request";

export class DeploymentMutation {
	private cluster: string;
	private client: GraphQLClient;

	apply = (query: string) => this.client.request(query)

	createDeployment = (kobj: DeploymentConfig) => `
	mutation {
		createDeployment(
		  apiVersion: "${kobj.apiVersion}",
		  cluster: "${this.cluster}",
		  metadata: {
			name: "${kobj.metadata.name}",
			labels: {
			  app:"${kobj.labels.app}"
			},
			namespace: "${kobj.metadata.namespace}",
			annotations: [
				{key: "name", value: "ReplicaSet"},
				{key: "width", value: "180"},
				{key: "height", value: "100"},
				{key: "stroke", value: "black"},
				{key: "strokeWidth", value: "2"},
				{key: "cornerRadius", value: "50"},
				{key: "icon", value: "./assets/rs.svg"}
			],
		  },
		  spec: {
			replicas:${kobj.spec.replicas},
			selector: {
			  matchLabels: {
				app: "${kobj.spec.selector.matchLabels.app}"
			  }
			},
			template: {
			  metadata:{
				name: "${kobj.spec.template.metadata.app}",
				namespace: "${kobj.metadata.namespace}"
	  
			  },
			  spec: {
				ports:{
				  containerPort: "${kobj.spec.template.spec.ports.containerPort}"
				},
				name: "myapp",
				image:"myapp"
			  }
			}
		  }
		) {
		  kind,
		  metadata {
			name,
			labels {app}
		  }
		}
	  }
	`;

	constructor(cluster: string, ep: string) {
		this.cluster = cluster;
		this.client = new GraphQLClient(ep);
	}
}
