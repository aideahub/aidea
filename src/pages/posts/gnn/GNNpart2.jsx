import React, { useEffect } from 'react';
import GNNIntroImage from "./GNNIntro.png"; 

const GNNPart2 = () => {

  return (
    <article>
        <img src={GNNIntroImage} className="post-image" />

      <header>
        <h1>Deep Dive into Message Passing in GNNs</h1>
        <meta name="description" content="Learn about Graph Neural Networks (GNNs), how they work, and why they are important for AI applications. A comprehensive introduction to GNNs." />
        <meta property="og:title" content="Deep Dive into Message Passing in GNNs" />
        <meta property="og:description" content="This process enables nodes in a graph
            to gather and process information from their neighbors, capturing the
            relationships and structure within the data. In this post, we’ll
            explain the math, discuss common aggregation and update techniques,
            explore real-world examples, and highlight challenges. By the end,
            you’ll see why message passing is so essential for GNNs." />
        <meta property="og:type" content="article" />
      
      </header>


      <section>
          <h2>Message Passing Mechanism</h2>
          <p>
            At the core of every GNN lies message passing — the process through
            which nodes communicate with their neighbors to learn and refine their
            embeddings. This iterative exchange allows GNNs to capture both local
            and global graph structures, making them versatile for a wide range of
            tasks.
          </p>
          <h3>Steps in Message Passing</h3>
          <ol>
            <li>
              <strong>Aggregation:</strong> Each node gathers and summarizes
              information from its neighbors.
            </li>
            <li>
              <strong>Update:</strong> The node refines its own embedding using the
              aggregated information.
            </li>
          </ol>
          <p>
            By repeating this process across several layers, nodes can incorporate
            information from distant parts of the graph, enabling more powerful and
            meaningful representations.
          </p>
        </section>

        <section>
          <h2>General Framework</h2>
          <p>
            The message-passing process for a node <em>v</em> at layer <em>k</em>
            can be expressed as:
          </p>
          <p>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <msub>
                <mi>h</mi>
                <mi>v</mi>
              </msub>
              <mo>^</mo>
              <mo>(</mo>
              <mi>k</mi>
              <mo>)</mo>
              <mo>=</mo>
              <mi>UPDATE</mi>
              <mo>(</mo>
              <msub>
                <mi>h</mi>
                <mi>v</mi>
              </msub>
              <mo>(</mo>
              <mi>k</mi>
              <mo>-</mo>
              <mn>1</mn>
              <mo>)</mo>
              <mo>,</mo>
              <mi>AGGREGATE</mi>
              <mo>(</mo>
              <mo>&#123;</mo>
              <msub>
                <mi>h</mi>
                <mi>u</mi>
              </msub>
              <mo>(</mo>
              <mi>k</mi>
              <mo>-</mo>
              <mn>1</mn>
              <mo>)</mo>
              <mo>|</mo>
              <mi>u</mi>
              <mo>&in;</mo>
              <mi>N</mi>
              <mo>(</mo>
              <mi>v</mi>
              <mo>)</mo>
              <mo>&#125;</mo>
              <mo>)</mo>
              <mo>)</mo>
            </math>
          </p>
          <ul>
            <li>
              <strong>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <msub>
                    <mi>h</mi>
                    <mi>v</mi>
                  </msub>
                  <mo>^</mo>
                  <mo>(</mo>
                  <mi>k</mi>
                  <mo>)</mo>
                </math>
              </strong>
              : Node embedding at layer <em>k</em>.
            </li>
            <li>
              <strong>
                <math xmlns="http://www.w3.org/1998/Math/MathML">
                  <mi>N</mi>
                  <mo>(</mo>
                  <mi>v</mi>
                  <mo>)</mo>
                </math>
              </strong>
              : The set of neighbors of node <em>v</em>.
            </li>
            <li><strong>AGGREGATE:</strong> Combines neighbor information.</li>
            <li><strong>UPDATE:</strong> Refines the node’s embedding.</li>
          </ul>
        </section>

        <section>
          <h2>Aggregation Functions</h2>
          <p>How do nodes collect information from their neighbors? Here are some approaches:</p>
          <h3>1. Sum Aggregation</h3>
          <p>Simple and effective, summing ensures order invariance:</p>
          <p>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>AGGREGATE</mi>
              <mo>=</mo>
              <munderover>
                <mo>∑</mo>
                <mi>u</mi>
                <mo>&in;</mo>
                <mi>N</mi>
                <mo>(</mo>
                <mi>v</mi>
                <mo>)</mo>
              </munderover>
              <msub>
                <mi>h</mi>
                <mi>u</mi>
              </msub>
            </math>
          </p>

          <h3>2. Mean Aggregation</h3>
          <p>
            By averaging neighbor embeddings, it prevents nodes with more
            neighbors from dominating:
          </p>
          <p>
            <math xmlns="http://www.w3.org/1998/Math/MathML">
              <mi>AGGREGATE</mi>
              <mo>=</mo>
              <mfrac>
                <mn>1</mn>
                <mo>|</mo>
                <mi>N</mi>
                <mo>(</mo>
                <mi>v</mi>
                <mo>)</mo>
                <mo>|</mo>
              </mfrac>
              <munderover>
                <mo>∑</mo>
                <mi>u</mi>
                <mo>&in;</mo>
                <mi>N</mi>
                <mo>(</mo>
                <mi>v</mi>
                <mo>)</mo>
              </munderover>
              <msub>
                <mi>h</mi>
                <mi>u</mi>
              </msub>
            </math>
          </p>
        </section>

        <section>
          <h2>Real-World Applications</h2>
          <p>
            Imagine using GNNs on a social network where nodes represent users and
            edges represent friendships:
          </p>
          <ul>
            <li>
              <strong>Community Detection:</strong> Identifying groups with
              similar interests.
            </li>
            <li>
              <strong>Influence Prediction:</strong> Estimating which users are
              key influencers.
            </li>
          </ul>
        </section>
    </article>
  );
};


export default GNNPart2;