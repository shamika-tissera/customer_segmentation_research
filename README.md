# Research on Customer Segmentation Methods Using Embeddings
An exploration of different customer segmentation methods to recommend the best.

### Datasets Used

| Dataset | Source | Description |
| ------- | ------ |-------------|
| Banking Dataset - Marketing Targets  | [Banking Dataset - Marketing Targets](https://www.kaggle.com/datasets/prakharrathi25/banking-dataset-marketing-targets) | This dataset contains information about customers who were contacted by a bank for a term deposit campaign.
| E-Commerce Public Dataset by Olist | [E-Commerce Public Dataset by Olist](https://doi.org/10.34740/KAGGLE/DSV/195341) | A collection of data from an online marketplace in Brazil. It comprises data from over 100,000 online orders in Brazil between 2016 and 2018.



### Structure for Experimentation on Exploring the Appropriability of Combining LLM and DICE Embeddings

```
Phase - I
	k - Means
		Dataset - 1 [1]
		Dataset - 2 [2]
	Agglomerative
		Dataset - 1 [3]
		Dataset - 2 [4]
Phase - II
	k - Means
		Dataset - 1
			Using LLM [5]
			Using LLM + DICE [6]
		Dataset - 2 (Only using DICE) [7]
	Agglomerative
		Dataset - 1
			Using LLM [8]
			Using LLM + DICE [9]
		Dataset - 2 (Only using DICE) [10]
```
Use the table below to navigate to the respective files.
| Phase | Method | Dataset | Description | File |
| ----- | ------ | ------- | ----------- | ---- |
| Phase - I | k - Means | Dataset - 1 |  | [[1]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B1%5D.ipynb)
| Phase - I | k - Means | Dataset - 2 |  | [[2]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B2%5D.ipynb)
| Phase - I | Agglomerative | Dataset - 1 |  | [[3]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B3%5D.ipynb)
| Phase - I | Agglomerative | Dataset - 2 |  | [[4]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B4%5D.ipynb)
| Phase - II | k - Means | Dataset - 1 | Using LLM Embeddings | [[5]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B5%5D.ipynb)
| Phase - II | k - Means | Dataset - 1 | Using LLM + DICE Embeddings | [[6]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B6%5D.ipynb)
| Phase - II | k - Means | Dataset - 2 | Using DICE Embeddings | [[7]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B7%2C%2010%5D.ipynb)
| Phase - II | Agglomerative | Dataset - 1 | Using LLM Embeddings | [[8]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B8%5D.ipynb)
| Phase - II | Agglomerative | Dataset - 1 | Using LLM + DICE Embeddings | [[9]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B9%5D.ipynb)
| Phase - II | Agglomerative | Dataset - 2 | Using DICE Embeddings | [[10]](https://github.com/shamika-tissera/customer_segmentation_research/blob/main/%5B7%2C%2010%5D.ipynb)

### Structure for Experimentation on Comparing Various LLMs with Traditional NLP Methods
-> See 'Reviews' Directory
