---
card: "https://cdn-media-1.freecodecamp.org/images/1*OnUzsFnzyPzklZWjgRLr5g.png"
tags: [Github]
description: "The need to manage multiple GitHub accounts on the same machi"
author: "Milad E. Fahmy"
title: "How to manage multiple GitHub accounts on a single machine with SSH keys"
created: "2021-08-16T10:15:03+02:00"
modified: "2021-08-16T10:15:03+02:00"
---
<div class="site-wrapper">
<main id="site-main" class="site-main outer">
<div class="inner">
<article class="post-full post tag-github tag-tech tag-programming tag-productivity tag-web-development ">
<header class="post-full-header">
<h1 class="post-full-title">How to manage multiple GitHub accounts on a single machine with SSH keys</h1>
</header>
<figure class="post-full-image">
<picture>
<source media="(max-width: 700px)" sizes="1px" srcset="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7 1w">
<source media="(min-width: 701px)" sizes="(max-width: 800px) 400px,
(max-width: 1170px) 700px,
1400px" srcset="https://cdn-media-1.freecodecamp.org/images/1*OnUzsFnzyPzklZWjgRLr5g.png 300w,
https://cdn-media-1.freecodecamp.org/images/1*OnUzsFnzyPzklZWjgRLr5g.png 600w,
https://cdn-media-1.freecodecamp.org/images/1*OnUzsFnzyPzklZWjgRLr5g.png 1000w,
https://cdn-media-1.freecodecamp.org/images/1*OnUzsFnzyPzklZWjgRLr5g.png 2000w">
<img onerror="this.style.display='none'" src="https://cdn-media-1.freecodecamp.org/images/1*OnUzsFnzyPzklZWjgRLr5g.png" alt="How to manage multiple GitHub accounts on a single machine with SSH keys">
</picture>
</figure>
<section class="post-full-content">
<div class="post-content">
<p>The need to manage multiple GitHub accounts on the same machine comes up at some point in time for most developers. Every single time I happen to change my Mac or need to Git push with a new work account, I end up surfing for the how to’s of something I have done over half a dozen times.</p><p>My laziness in not documenting the process and inability to remember the steps makes me spent a decent amount of time getting the bits and pieces from all over the web and then somehow making it work.</p><p>I’m sure there are many of you who have been there, done that and many more of you who are just waiting for the next time the same thing occurs (myself included!). This endeavor is meant to help us all out.</p><h4 id="1-generating-the-ssh-keys">1. Generating the SSH keys</h4><p>Before generating an SSH key, we can check to see if we have any existing SSH keys: <code>ls -al ~/.ssh</code> This will list out all existing public and private key pairs, if any.</p><p>If <code>~/.ssh/id_rsa</code> is available, we can reuse it, or else we can first generate a key to the default <code>~/.ssh/id_rsa</code> by running:</p><pre><code>ssh-keygen -t rsa</code></pre><p>When asked for the location to save the keys, accept the default location by pressing enter. A private key and public key <code>~/.ssh/id_rsa.pub</code> will be created at the default ssh location <code>~/.ssh/</code>.</p><p>Let’s use this default key pair for our personal account.</p><p>For the work accounts, we will create different SSH keys. The below code will generate the SSH keys, and saves the public key with the tag <em>“email@work_mail.com” </em>to <code>~/.ssh/id_rsa_work_user1.pub</code></p><pre><code class="language-bash">$ ssh-keygen -t rsa -C "email@work_mail.com" -f "id_rsa_work_user1"
</code></pre><p>We have two different keys created:</p><pre><code class="language-bash">~/.ssh/id_rsa
~/.ssh/id_rsa_work_user1</code></pre><h4 id="2-adding-the-new-ssh-key-to-the-corresponding-github-account">2. Adding the new SSH key to the corresponding GitHub account</h4><p>We already have the SSH public keys ready, and we will ask our GitHub accounts to trust the keys we have created. This is to get rid of the need for typing in the username and password every time you make a Git push.</p><p>Copy the public key <code>pbcopy &lt; ~/.ssh/id_rsa.</code>pub and then log in to your personal GitHub account:</p><ol><li>Go to <code>Settings</code></li><li>Select <code>SSH and GPG keys</code> from the menu to the left.</li><li>Click on <code>New SSH key</code>, provide a suitable title, and paste the key in the box below</li><li>Click <code>Add key</code> — and you’re done!</li></ol><blockquote>For the work accounts, use the corresponding public keys (<code>pbcopy &lt; ~/.ssh/id_rsa_work_user1.</code>pub) and repeat the above steps in your GitHub work accounts.</blockquote><h4 id="3-registering-the-new-ssh-keys-with-the-ssh-agent">3 . Registering the new SSH Keys with the ssh-agent</h4><p>To use the keys, we have to register them with the <strong>ssh-agent </strong>on our machine. Ensure ssh-agent is running using the command <code>eval "$(ssh-agent -s)"</code>.<br>Add the keys to the ssh-agent like so:</p><pre><code class="language-bash">ssh-add ~/.ssh/id_rsa
ssh-add ~/.ssh/id_rsa_work_user1</code></pre><p>Make the ssh-agent use the respective SSH keys for the different SSH Hosts.</p><p>This is the crucial part, and we have two different approaches:</p><p>Using the SSH configuration file (Step 4), and having only one active SSH key in the ssh-agent at a time (Step 5).</p><h3 id="4-creating-the-ssh-config-file"><strong>4. Creating the SSH config File</strong></h3><p>Here we are actually adding the SSH configuration rules for different hosts, stating which identity file to use for which domain.</p><p>The SSH config file will be available at <strong>~/.ssh/config</strong>.<strong> </strong>Edit it if it exists, or else we can just create it.</p><pre><code class="language-bash">$ cd ~/.ssh/
$ touch config     // Creates the file if not exists
$ code config      // Opens the file in VS code, use any editor</code></pre><p>Make configuration entries for the relevant GitHub accounts similar to the one below in your <code>~/.ssh/config</code> file:</p><pre><code class="language-bash"># Personal account, - the default config
Host github.com
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa
# Work account-1
Host github.com-work_user1
HostName github.com
User git
IdentityFile ~/.ssh/id_rsa_work_user1</code></pre><p>“<strong>work_user1</strong>” is the GitHub user id for the work account.</p><p>“<strong>g<em>ithub.com-</em>work_user1</strong>” is a notation used to differentiate the multiple Git accounts. You can also use “<strong>work_user1.g<em>ithub.com” </em></strong>notation as well. Make sure you’re consistent with what hostname notation you use. This is relevant when you clone a repository or when you set the remote origin for a local repository</p><p>The above configuration asks ssh-agent to:</p><ul><li>Use <strong>id_rsa </strong>as the key<strong> </strong>for<strong> </strong>any Git URL that uses<strong> @github.com</strong></li><li>Use the <strong>id_rsa_work_user1</strong> key for any Git URL that uses <strong>@github.com-work_user1</strong></li></ul><h3 id="5-one-active-ssh-key-in-the-ssh-agent-at-a-time">5. One active SSH key in the ssh-agent at a time</h3><p>This approach doesn’t require the SSH config rules. Rather we manually ensure that the ssh-agent has only the relevant key attached at the time of any Git operation.</p><p><code>ssh-add -l</code> will list all the SSH keys attached to the ssh-agent. Remove all of them and add the one key you are about to use.</p><p>If it’s to a personal Git account that you are about to push:</p><pre><code class="language-bash">$ ssh-add -D      //removes all ssh entries from the ssh-agent
$ ssh-add ~/.ssh/id_rsa           // Adds the relevant ssh key</code></pre><p>The ssh-agent now has the key mapped with the personal GitHub account, and we can do a Git push to the personal repository.</p><p>To push to your work GitHub account-1, change the SSH key mapped with the ssh-agent by removing the existing key and adding the SSH key mapped with the GitHub work account.</p><pre><code class="language-bash">$ ssh-add -D
$ ssh-add ~/.ssh/id_rsa_work_user1</code></pre><p>The ssh-agent at present has the key mapped with the work Github account, and you can do a Git push to the work repository. This requires a bit of manual effort, though.</p><h4 id="setting-the-git-remote-url-for-the-local-repositories">Setting the git remote Url for the local repositories</h4><p>Once we have local Git repositories cloned /created, ensure the Git config user name and email is exactly what you want. GitHub identifies the author of any commit from the email id attached with the commit description.</p><p>To list the config name and email in the local Git directory, do <code><em>git config user.name</em></code> and <code><em>git config user.email</em></code>. If it’s not found, update accordingly.</p><pre><code class="language-bash">git config user.name "User 1"   // Updates git config user name
git config user.email "user1@workMail.com"</code></pre><h3 id="6-while-cloning-repositories">6. While Cloning Repositories</h3><p>Note: step 7 will help, if we have the repository already available on local.</p><p>Now that the configurations are in place, we can go ahead and clone the corresponding repositories. On cloning, make a note that we use the host names that we used in the SSH config.</p><p>Repositories can be cloned using the clone command Git provides:</p><pre><code>git clone git@github.com:personal_account_name/repo_name.git</code></pre><p>The work repository will require a change to be made with this command:</p><pre><code class="language-bash">git clone git@github.com-work_user1:work_user1/repo_name.git</code></pre><p>This change is made depending on the host name defined in the SSH config. The string between @ and : should match what we have given in the SSH config file.</p><h3 id="7-for-locally-existing-repositories">7. For Locally Existing Repositories</h3><p><strong>If we have the repository already cloned:</strong></p><p>List the Git remote of the repository, <code>git remote -v</code></p><p>Check whether the URL matches our GitHub host to be used, or else update the remote origin URL.</p><pre><code class="language-bash">git remote set-url origin git@github.com-worker_user1:worker_user1/repo_name.git</code></pre><p>Ensure the string between @ and : matches the Host we have given in the SSH config.</p><p><strong>If you are creating a new repository on local:</strong></p><p>Initialize Git in the project folder <code>git init</code>.</p><p>Create the new repository in the GitHub account and then add it as the Git remote to the local repository.</p><pre><code class="language-bash">git remote add origin git@github.com-work_user1:work_user1/repo_name.git </code></pre><p>Ensure the string between @ and : matches the Host we have given in the SSH config.</p><p>Push the initial commit to the GitHub repository:</p><pre><code class="language-bash">git add .
git commit -m "Initial commit"
git push -u origin master</code></pre><p>We are done!</p><p>Adding or updating the Git remote of the local Git directory with the proper host will take care of selecting the correct SSH key to verify our identity with GitHub. With all the above in place, our <code>git operations</code> should work seamlessly.</p>
</div>
<hr>
<hr>
</section>
</article>
</div>
</main>
</div>
<!-- Google Tag Manager (noscript) -->
<!-- End Google Tag Manager (noscript) -->
