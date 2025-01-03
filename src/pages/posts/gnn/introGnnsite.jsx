import React, { useEffect } from 'react';
import GNNIntroImage from "./GNNIntro.png"; 

const IntroductionToGNN = () => {

  return (
    <article>
        <img src={GNNIntroImage} className="post-image" />

      <header>
        <h1>Introduction to Graph Neural Networks (GNNs)</h1>
        <meta name="description" content="Learn about Graph Neural Networks (GNNs), how they work, and why they are important for AI applications. A comprehensive introduction to GNNs." />
        <meta property="og:title" content="Introduction to Graph Neural Networks (GNNs)" />
        <meta property="og:description" content="Learn about Graph Neural Networks (GNNs), how they work, and why they are important for AI applications. A comprehensive introduction to GNNs." />
        <meta property="og:type" content="article" />
      
      </header>


      <section>
      
        <p>
          Graphs are powerful structures used to represent relationships and connections in data. 
          Whether it’s modeling social networks, chemical molecules, or transportation systems, graphs provide a way to capture the underlying structure of complex systems. 
          Graph Neural Networks (GNNs)are a class of deep learning models designed to process graph-structured data, enabling groundbreaking advancements in various fields.
          This post will lay the groundwork for understanding GNNs, covering the basics of graphs, why they matter, and how GNNs are transforming the landscape of AI.

    </p>     
        
        <h2>What Are Graphs?</h2>
        <p>
          In simple terms, a graph is a collection of points (called <strong>nodes</strong> or <strong>vertices</strong>) connected by lines (called <strong>edges</strong>). Graphs can represent nearly any system where relationships between entities matter.
        </p>
        <h3>Key Components of a Graph <math> <mi> G </mi> <mo> = </mo> <mrow> <mo> ( </mo> <mi> V </mi> <mo> , </mo> <mi> E </mi> <mo> ) </mo> </mrow> </math> </h3>
        <ul>
          <li><strong>Nodes (<math> <mi> V </mi> </math>) :</strong> These represent the entities in the graph. For example, in a social network, nodes could represent people.</li>
          <li><strong>Edges (<math > <mi> E </mi> <mo> &#x2286; </mo> <mi> V </mi> <mo> &#x00D7;</mo> <mi> V </mi> </math> ):</strong> These represent the relationships between nodes. In our social network example, edges could represent friendships.</li>
        </ul>
        
        <h3>Types of Graphs</h3>
        <p>Graphs come in many flavors:</p>
        <ul>
          <li><strong>Undirected Graphs:</strong> Edges have no direction, like friendships where both people know each other.</li>
          <li><strong>Directed Graphs:</strong> Edges have a direction, such as a "follows" relationship on social media.</li>
          <li><strong>Weighted Graphs:</strong> Edges have weights, representing the strength or cost of a connection (e.g., distance between cities).</li>
        </ul>
        
        <h3>How Do We Represent Graphs?</h3>
        <p>Graphs can be stored in several ways, but one of the most common is using an <strong>adjacency matrix</strong> <math> <mi> A </mi> </math>. This is a square matrix where rows and columns correspond to nodes:

        <ul>
        <li>If there’s an edge between node <math > <mi> i </mi>  </math> and node <math > <mi> j </mi>  </math>, then the entry <math xmlns='http://www.w3.org/1998/Math/MathML'> <msub> <mrow> <mi> A </mi> </mrow> <mrow> <mi> i </mi> <mi> j </mi> </mrow> </msub> <mo> = </mo> <mn> 1 </mn> </math>.</li>
        <li>Otherwise, <math xmlns='http://www.w3.org/1998/Math/MathML'> <msub> <mrow> <mi> A </mi> </mrow> <mrow> <mi> i </mi> <mi> j </mi> </mrow> </msub> <mo> = </mo> <mn> 0 </mn> </math>.</li>
      </ul>
        
      </p>
        <pre>
        <math display="block"> <mi> A </mi> <mo> = </mo> <mrow> <mo> [ </mo> <mtable> <mtr> <mtd> <mn> 0 </mn> </mtd> <mtd> <mn> 1 </mn> </mtd> <mtd> <mn> 1 </mn> </mtd> </mtr> <mtr> <mtd> <mn> 1 </mn> </mtd> <mtd> <mn> 0 </mn> </mtd> <mtd> <mn> 0 </mn> </mtd> </mtr> <mtr> <mtd> <mn> 1 </mn> </mtd> <mtd> <mn> 0 </mn> </mtd> <mtd> <mn> 0 </mn> </mtd> </mtr> </mtable> <mo> ] </mo> </mrow> </math> 
        </pre>
        
        <p>This matrix shows that Node 1 is connected to Nodes 2 and 3, while Node 2 is only connected to Node 1, and so on.</p>
        
        <h2>Why Are Graphs Important?</h2>
        <p>Many real-world problems can naturally be modeled as graphs. Consider these examples:</p>
        <ul>
          <li><strong>Social Networks:</strong> People are nodes, and their friendships are edges.</li>
          <li><strong>Biological Networks:</strong> Proteins are nodes, and their interactions are edges.</li>
          <li><strong>Knowledge Graphs:</strong> Entities (e.g., "Paris") are nodes, and their relationships (e.g., "is the capital of") are edges.</li>
        </ul>


        <p>What makes graphs unique is their ability to encode relationships beyond flat data. 
          They allow us to model connections, dependencies, and hierarchies in ways that traditional data structures cannot. 
          Traditional deep learning models like CNNs and RNNs are not well-suited for graph data because they rely on fixed structures (e.g., grids or sequences). GNNs address this limitation by natively handling the irregular and non-Euclidean nature of graphs.</p>
        
        <h2>What Are Graph Neural Networks?</h2>
        <p>Graph Neural Networks (GNNs) are a family of deep learning algorithms designed specifically for graph data. Unlike traditional neural networks that work on structured data (like images or text), GNNs can process <strong>non-Euclidean data</strong> like graphs.</p>
        
        <p>The core idea behind GNNs is <strong>message passing</strong>: </p>
        <ul>
          <li>Nodes exchange information with their neighbors.</li>
          <li>Each node updates its representation (or "embedding") based on this information.</li>
        </ul>
        
        <h3>How Do GNNs Work?</h3>
        <p>The GNN workflow can be broken into three steps:</p>
        <ol>
          <li><strong>Aggregation:</strong> A node collects information from its neighbors. For example, a node could compute the average of its neighbors' features.</li>
          <li><strong>Combination:</strong> The node combines the aggregated information with its own features to update its representation.</li>
          <li><strong>Propagation:</strong> The updated representation is passed to the next layer of the network for further processing.</li>
        </ol>
        <p>This process repeats for several iterations (or layers), allowing each node to gather information from progressively larger neighborhoods in the graph.</p>

        <p>
        Mathematically, this can be expressed as:
        <pre>
        <math xmlns='http://www.w3.org/1998/Math/MathML' display="block"> <msubsup> <mrow> <mi> h </mi> </mrow> <mrow> <mi> v </mi> </mrow> <mrow> <mrow> <mo> ( </mo> <mi> k </mi> <mo> ) </mo> </mrow> </mrow> </msubsup> <mo> = </mo> <mi> UPDATE </mi> <mrow> <mo> ( </mo> <msubsup> <mrow> <mi> h </mi> </mrow> <mrow> <mi> v </mi> </mrow> <mrow> <mo> ( </mo> <mi> k </mi> <mo> - </mo> <mn> 1 </mn> <mo> ) </mo> </mrow> </msubsup> <mo> , </mo> <mi> AGGREGATE </mi> <mrow> <mo> ( </mo> <mrow> <mo> &#123; </mo> <msubsup> <mrow> <mi> h </mi> </mrow> <mrow> <mi> v </mi> </mrow> <mrow> <mrow> <mo> ( </mo> <mi> k </mi> <mo> - </mo> <mn> 1 </mn> <mo> ) </mo> </mrow> </mrow> </msubsup> <mo> : </mo> <mi> u </mi> <mo> &#x2208;  </mo> <msup> <mrow> <mi> N </mi> </mrow> <mrow> <mo> * </mo> </mrow> </msup> <mrow> <mo> ( </mo> <mi> v </mi> <mo> ) </mo> </mrow> <mo> &#125; </mo> </mrow> <mo> ) </mo> </mrow> <mo> ) </mo> </mrow> </math>

        </pre>
        Where:
        <ul>
          <li><math xmlns='http://www.w3.org/1998/Math/MathML'> <msubsup> <mrow> <mi> h </mi> </mrow> <mrow> <mi> v </mi> </mrow> <mrow> <mrow> <mo> ( </mo> <mi> k </mi> <mo> ) </mo> </mrow> </mrow> </msubsup> </math> : The embedding of node <math><mi>v</mi></math> at layer <math><mi>k</mi></math>.</li>
          <li><math xmlns='http://www.w3.org/1998/Math/MathML'> <msup> <mrow> <mi> N </mi> </mrow> <mrow> <mo> * </mo> </mrow> </msup> <mrow> <mo> ( </mo> <mi> v </mi> <mo> ) </mo> </mrow> </math> : The set of neighbors of node <math><mi>v</mi></math>.</li>
          <li><math><mi>AGGREGATE</mi></math>: A function (e.g. sum, mean, max, etc) that gathers the information from the adjacent nodes.</li>
          <li><math><mi>UPDATE</mi></math>: A function (e.g. a neural network) that updates the node's embedding.</li>
        </ul>
        </p>
        <p><strong>Do not worry about the math. Important is getting the basics and the rest will come!</strong></p>
        
        <h3>Graph Convolutional Networks (GCNs): A Simple Example</h3>
        <p>One of the most popular GNN architectures is the Graph Convolutional Network (GCN). It works like a convolutional neural network (CNN) but operates on graphs instead of grids.</p>
        <pre>
        <math display="block"> <msup> <mrow> <mi> H </mi> </mrow> <mrow> <mi> k </mi> </mrow> </msup> <mo> = </mo> <mi> &#x03C3; </mi> <mrow> <mo> ( </mo> <msup> <mrow> <mi> D </mi> </mrow> <mrow> <mo> - </mo> <mn> 1 </mn> <mo> / </mo> <mn> 2 </mn> </mrow> </msup> <msup> <mrow> <mi> A </mi> </mrow> <mrow> <mo> * </mo> </mrow> </msup> <msup> <mrow> <mi> D </mi> </mrow> <mrow> <mo> - </mo> <mn> 1 </mn> <mo> / </mo> <mn> 2 </mn> </mrow> </msup> <msup> <mrow> <mi> H </mi> </mrow> <mrow> <mrow> <mo> ( </mo> <mi> k </mi> <mo> - </mo> <mn> 1 </mn> <mo> ) </mo> </mrow> </mrow> </msup> <msup> <mrow> <mi> W </mi> </mrow> <mrow> <mi> k </mi> </mrow> </msup> <mo> ) </mo> </mrow> </math>         
        </pre>
        <p>
        Breaking it down:
          <ul>
            <li><math> <msup> <mrow> <mi> H </mi> </mrow> <mrow> <mi> k </mi> </mrow> </msup></math>: Node embeddings at layer <math><mi> k </mi></math> </li>
            <li><math xmlns='http://www.w3.org/1998/Math/MathML'> <msup> <mrow> <mi> A </mi> </mrow> <mrow> <mo> * </mo> </mrow> </msup> <mo> = </mo> <mi> A </mi> <mo> + </mo> <mi> I </mi> </math> : The adjacency matrix with self loops added.</li>
            <li><math xmlns='http://www.w3.org/1998/Math/MathML'> <mi> D </mi> </math> : The degree of the adjacency Matrix <math xmlns='http://www.w3.org/1998/Math/MathML'> <msup> <mrow> <mi> A </mi> </mrow> <mrow> <mo> * </mo> </mrow> </msup> </math> (It correspondes with the number of edges for each node)</li>
            <li><math xmlns='http://www.w3.org/1998/Math/MathML'> <msup> <mrow> <mi> W </mi> </mrow> <mrow> <mrow> <mo> ( </mo> <mi> k </mi> <mo> ) </mo> </mrow> </mrow> </msup> </math>: Learnable weight matrix for layer <math><mi>k</mi></math>.</li>
            <li><math xmlns='http://www.w3.org/1998/Math/MathML'> <mi> &#x03C3; </mi> </math>: Activation function, e.g., ReLU. </li>
          </ul>
        </p>
        
        <p>This operation aggregates information from a node’s neighbors and updates its embedding, normalized to avoid issues with varying node degrees.</p>
        
        <h2>Why Are GNNs Revolutionary?</h2>
        <ul>
          <li><strong>Flexibility:</strong> GNNs work on any graph structure, whether it’s undirected, directed, or weighted.</li>
          <li><strong>Expressiveness:</strong> They can model complex relationships and interactions, capturing the essence of graph data.</li>
          <li><strong>Real-World Impact:</strong> GNNs are used in applications like fraud detection, drug discovery, and recommendation systems, solving problems that were previously out of reach.</li>
        </ul>
        
        <h2>What’s Next?</h2>
        <p>Now that you understand the basics of graphs and GNNs, we’re ready to dive deeper. In the next post, we’ll explore the inner workings of GNNs, including the specifics of message passing and how different types of GNNs work.</p>
        
        <p>Stay tuned, and let’s unravel the power of Graph Neural Networks together!</p>
      </section>
    </article>
  );
};


export default IntroductionToGNN;