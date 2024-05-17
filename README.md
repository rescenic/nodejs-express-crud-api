# NODE.JS EXPRESS REST SERVER

## Created by: Muhammad Ridwan Hakim

### 0. Git clone this repository.

### 1. Create table 'products' in MySQL DB.

```
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `category` varchar(128) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

### 2. Copy env.example to .env file and edit .env file.

### 3. Import this Postman Collection.
```
{
	"info": {
		"_postman_id": "be17691c-304e-4e77-8f84-f5b3d0d44fd5",
		"name": "Express REST API",
		"description": "Postman collection for testing the Express REST API",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "11724952",
		"_collection_link": "https://rescenic.postman.co/workspace/Rescenic%2C-Ltd.~921be1be-1dac-49e7-86bc-07abfad55b66/collection/11724952-be17691c-304e-4e77-8f84-f5b3d0d44fd5?action=share&source=collection_link&creator=11724952"
	},
	"item": [
		{
			"name": "Home",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}",
					"host": [
						"{{base_url}}"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get All Products",
			"request": {
				"method": "GET",
				"header": [],
				"url": {
					"raw": "{{base_url}}/products",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Get Product by ID",
			"protocolProfileBehavior": {
				"disableBodyPruning": true
			},
			"request": {
				"method": "GET",
				"header": [],
				"body": {
					"mode": "raw",
					"raw": "",
					"options": {
						"raw": {
							"language": "json"
						}
					}
				},
				"url": {
					"raw": "{{base_url}}/products/:id",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"products",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": "1"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Create Product",
			"request": {
				"method": "POST",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"id\": 2,\n  \"name\": \"Laptop ASUS Workstation Pro\",\n  \"stock\": 1000,\n  \"category\": \"Computer\",\n  \"description\": \"Laptop Elite Harga Selangit\"\n}"
				},
				"url": {
					"raw": "{{base_url}}/products",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"products"
					]
				}
			},
			"response": []
		},
		{
			"name": "Update Product by ID",
			"request": {
				"method": "PUT",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"name\": \"Updated Product 1\",\n  \"stock\": 150,\n  \"category\": \"Updated Category 1\",\n  \"description\": \"Updated description for product 1\"\n}"
				},
				"url": {
					"raw": "{{base_url}}/products/:id",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"products",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": "1"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Partially Update Product by ID",
			"request": {
				"method": "PATCH",
				"header": [
					{
						"key": "Content-Type",
						"value": "application/json"
					}
				],
				"body": {
					"mode": "raw",
					"raw": "{\n  \"stock\": 200\n}"
				},
				"url": {
					"raw": "{{base_url}}/products/:id",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"products",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": "1"
						}
					]
				}
			},
			"response": []
		},
		{
			"name": "Delete Product by ID",
			"request": {
				"method": "DELETE",
				"header": [],
				"url": {
					"raw": "{{base_url}}/products/:id",
					"host": [
						"{{base_url}}"
					],
					"path": [
						"products",
						":id"
					],
					"variable": [
						{
							"key": "id",
							"value": "1"
						}
					]
				}
			},
			"response": []
		}
	],
	"event": [
		{
			"listen": "prerequest",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		},
		{
			"listen": "test",
			"script": {
				"type": "text/javascript",
				"packages": {},
				"exec": [
					""
				]
			}
		}
	],
	"variable": [
		{
			"key": "base_url",
			"value": "http://localhost:3000",
			"type": "string"
		}
	]
}
```

### 4. Test in Postman.

### 5. Fork & Star this repository.
