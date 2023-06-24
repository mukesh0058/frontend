import React from "react";
import NewHeader from "./NewHeader";
import Frame from "../../SVG/Frame";
import Writing from "../../SVG/Writing";
import Quiz from "../../SVG/Quiz";
import SubTitle from "../../SVG/SubTitle";
import Regenarate from "../../img/icon_regenerate.png";
const UploadPage = () => {
  const data = `  tire. Then that is the standard AI, sorry, IA. IA means
  infrequent access. Whenever you see the IA, that is the
  infrequent access, one zone IA. Lesser instance USCR flexible
  retrieval, USCR deep archive, right. So costlier is this one
  intelligent and then standard. Then over here it will be less,
  less costlier. Why? Because standard is that highly available
  and whenever you require the data, it's always be available.
  Then intelligent is sometimes what happened that let's say we do
  have some of the files, we are not frequently accessing it,
  right? So we need to create some policies that from one tire to
  another, we need to transfer that data. So intelligent tire, we
  can use that, transfer the data from standard to standard IA,
  then from the standard IA to standard zone IA. Sorry, one zone
  IA, one zone IA to glass, not one zone IA, but standard IA to
  glacier instance, then glacier to glacier flexible and glacier
  flexible to deep archive, right? So based on that data access,
  let's say if we do have file that is not accessible within the
  30 days. So these policies, storage policy, it will transfer
  that data from standard to standard infrequent access. Let's say
  same file is not accessible since last 60 days, right? So that
  file will be going to transfer from standard IA to glacier
  instance. And over here you can see all of this minimum storage
  duration. So here you can see that standard, this is 30 days,
  one zone, that is 30 days glacier, that is 90 days. Glacier
  flexible, 90 days and glacier deep it is 180 days, right.
  Another question that might be during the exam that which are
  the free retriever s three, right? Free retriever s three
  classes. So retriever fee. You can see over here, this is none
  for the standard, okay? But over here you can see that per GBT
  travel, per GBT travel for any of this one, okay? So because
  this is less costlier. So whenever we retrieving the data from
  that s three, during that time Amazon going to charge. Now,
  sometimes not when that there is a large companies, right? And
  they do have previous data, maybe we can consider AWS shopping
  or any pharmacy companies or any ecommerce big companies, right?
  They do have really big data for last year, last year, last
  year, maybe ten years. They might need to maintain the ten years
  data. So during the time they have used, they are going to use
  deep archive because that is not frequent access, right? So you
  can see that minimum storage duration. So amazon is anyways
  going to charge for the 180 days. So such a data we are going to
  store for the deep archive. Okay, so in detail, this is a
  different topic we cannot cover over here. This is a database
  relation database, email database, TV database, warehouse
  database, hadoop athana Quick site, document DB, AWS, QLDB then
  manage, blockchain, glue data migration Services is there and
  there is an apptube. Right. So relational database for any
  transactional data. Right. So we do have RDS. Another postgres.
  Postgres is there than okay, so mostly Arrow is faster than
  postgres. It is saying that it is two times faster than
  postgres. And I can say that five times faster than MySQL
  because that is not open source. So we cannot see the code, but
  claiming that it is faster than even for our projects, we are
  using Aurora only. So that is the Register database in memory
  database we are using. That is the Elastic cache, right. We are
  using for that. So one is the redis one and another is the Mem
  cache. So this is the two database that is providing. Another
  one is the key value database. And that is the DynamoDB. Right?
  This database, DynamoDB is serverless and it is accessible for
  any of the region. Okay, so this is not region specific
  database. This is the question that might be coming. So whenever
  you create any of the table on AWS DynamoDB, it is not region
  specific. This is the text to faster access because it is a
  cache on the DynamoDB. So it is caching the data for the faster
  access and based on the query, it gives the result. Whereas we
  do have redsick. Then for the hadoop there is the EMR service.
  Okay, so my VBT is going to be going detail on that part for all
  of the Snr sometimes what happened that we do have large data
  and that data is stored on the S three, right? It might be Excel
  file, it might be some other format JSON. So what Snr will do
  xeno will read that data from S three and it will give us the
  insight. And we can do the SQL query on all of the S three data.
  So. Yeah. SQL data. Yeah, SQL query we can do on all of the S
  three data. Quick site. That is the dashboard to create for all
  of this data. Document DB this is based on the MongoDB. So if
  you want to use MongoDB, you can go with the documentb then
  QLDB. Okay, so this is financial ledger. Like once you write the
  data, it's not going to be rewarded, right? We can do the
  operational, we can update the value on the relational database
  or maybe MongoDB or anywhere. But if you use that QLDB, right,
  we cannot change that value. We need to do the new transaction
  and we need to write the new value again. So this is the I can
  say that internal blockchain. For the AWS, if you want to use
  the public blockchain, then AWS manage blockchain. Okay? So that
  is currently they are supporting hyperledger and ethereum
  blockchain. Glue is the ETL process, right? So let's say if you
  do have multiple data source and we do not have that, let's say
  if you want, I can say that for the X element, right? We want to
  create the data set for the users who are going to attend, who
  has visited attend the meetings in particular state, right? So
  there might be multiple table. We might need to be multiple
  database. I can say. One is that Neptune is there. One is that s
  three might have some data. So we are going to create some
  script. It will extract that data, load that data and it will be
  displayed that whatever the result we required. So for that glue
  is there database migration service? That is let's say if you
  want to migrate the data from Oracle to AWS, then this service
  is going to be used. And Neptune we are already using for the
  GraphQL sorry, graph database for the social networking and all
  those things. Do we need to continue? Because there are so many
  things we can go in practical as well. But we do not have that
  much time, right? Otherwise, even to explain one topic in AWS,
  it's required one to 2%. Still it is not going to be completed
  100%. So this is the basic overview that whatever question will
  be there or what services they are going to be covered during
  the exam. Okay. So even if you get some basic idea that what
  type of services the adverse is providing, you might get more
  confident on the answering the question. As well as that
  sometimes what happened that we might not aware about all of the
  service, but whenever there is a project, we can suggest to the
  client, right? That what type of service client can use to save
  the post and all the things. Because there is AWS post
  calculator is there, then billing is there. There are s`;
  return (
    <div>
      <NewHeader />
      <div className="upload-page-container">
        <div className="page-title-frame">
          <Frame />
        </div>
        <div className="uploaded-data-box">
          <div className="main-data-box">
            <div className="summarization-box">
              <div className="title-summarization">
                <span>
                  <Writing />
                  <span>Summarization</span>
                </span>
                <button className="regenarate-btn">
                  <img src={Regenarate} height={30} width={30} />
                </button>
              </div>
              <div className="summarization-data ">
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.replaceAll(".", ".<br />") || "No description",
                  }}
                ></p>
              </div>
            </div>
            <div className="quiz-box">
              <div className="title-summarization">
                <span>
                  <Quiz />
                  <span>Quiz</span>
                </span>
                <button className="regenarate-btn">
                  <img src={Regenarate} height={30} width={30} />
                </button>
              </div>
              <div className="quiz-data">
                <p
                  dangerouslySetInnerHTML={{
                    __html:
                      data?.replaceAll(".", ".<br />") || "No description",
                  }}
                ></p>
              </div>
            </div>
          </div>
          <div className="transcription-box">
            <div className="title-summarization">
              <span>
                <SubTitle />
                <span>Transcription</span>
              </span>
            </div>
            <div className="transcription-data">
              <p
                dangerouslySetInnerHTML={{
                  __html: data?.replaceAll(".", ".<br />") || "No description",
                }}
              ></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;
